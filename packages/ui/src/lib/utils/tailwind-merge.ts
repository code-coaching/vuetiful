import { type Config, extendTailwindMerge, mergeConfigs } from 'tailwind-merge';

export const withVuetiful = (prevConfig: Config<any, any>): Config<any, any> => {
  // const getAny = () => [validators.isAny] as const;

  const mergedConfigs = mergeConfigs(prevConfig, {
    extend: {
      // classGroups: {
      //   'vuetiful.preset': [{ 'preset': getAny(), 'preset-tonal': getAny(), 'preset-outlined': getAny(), 'preset-filled': getAny()  }],
      // },
      // conflictingClassGroups: {
      //   'vuetiful.preset': ['bg-color', 'text-color'],
      //   'bg-color': ['vuetiful.preset'],
      //   'text-color': ['vuetiful.preset'],
      // },
    },
  });

  return mergedConfigs;
};

export const tm = extendTailwindMerge(withVuetiful);
