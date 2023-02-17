import { customAlphabet } from 'nanoid';

const alphabet = '0123456789BCDFGHJKLMNPQRSTVWXYZ';

const generatorParameters = {
  user: 10,
  fcmToken: 2,
  tenant: 6,
} as const;

type Generator = Record<keyof typeof generatorParameters, () => string>;

const store: Partial<Generator> = {};

function storeFactory(name: keyof Generator, length: number) {
  return () => {
    if (!store[name])
      store[name] = customAlphabet(alphabet, length)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return store[name]!()
  }
}

function generatorFactory() {
  const gen = {} as Generator;

  // eslint-disable-next-line guard-for-in
  for (const key in generatorParameters) {
    // this is necessary to satisfy typescript strict mode
    const key_ts = key as keyof typeof generatorParameters;
    gen[key_ts] = storeFactory(key_ts, generatorParameters[key_ts])
  }

  return gen as Readonly<Generator>;
}

export const idGenerator = generatorFactory();