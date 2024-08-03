import { type Config, extendTailwindMerge, mergeConfigs, validators } from 'tailwind-merge';

const withVuetiful = (prevConfig: Config<any, any>): Config<any, any> => {
  const getAny = () => [validators.isAny] as const;

  const mergedConfigs = mergeConfigs(prevConfig, {
    extend: {
      classGroups: {
        'vuetiful.preset': getAny(),
        'vuetiful.bg-color': [
          {
            bg: [
              {
                primary: getAny(),
                secondary: getAny(),
                tertiary: getAny(),
                success: getAny(),
                warning: getAny(),
                error: getAny(),
                surface: getAny(),
              },
            ],
          },
        ],
        'vuetiful.text-color': [
          {
            text: [
              {
                primary: getAny(),
                secondary: getAny(),
                tertiary: getAny(),
                success: getAny(),
                warning: getAny(),
                error: getAny(),
                surface: getAny(),
              },
            ],
          },
        ],
      },
      conflictingClassGroups: {
        'vuetiful.preset': ['bg-color', 'text-color', 'vuetiful.bg-color', 'vuetiful.text-color'],
        'bg-color': ['bg-color', 'vuetiful.bg-color', 'vuetiful.preset'],
        'text-colo': ['text-color', 'vuetiful.text-color', 'vuetiful.preset'],
        'vuetiful.bg-color': ['bg-color', 'vuetiful.bg-color', 'vuetiful.preset'],
        'vuetiful.text-color': ['text-color', 'vuetiful.text-color', 'vuetiful.preset'],
      },
    },
  });

  return mergedConfigs;
};

export const tm = extendTailwindMerge(withVuetiful);
