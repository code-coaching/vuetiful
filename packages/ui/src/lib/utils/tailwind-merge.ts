import { type Config, extendTailwindMerge, mergeConfigs, validators } from 'tailwind-merge';

export const withVuetiful = (prevConfig: Config<any, any>): Config<any, any> => {
  const getAny = () => [validators.isAny] as const;

  const mergedConfigs = mergeConfigs(prevConfig, {
    extend: {
      classGroups: {
        // preset-filled and preset-tonal set background-color + color, so they conflict with bg/text defaults
        // preset-outlined only sets border, so it should NOT conflict with bg/text defaults
        'vuetiful.preset': [{ 'preset-tonal': getAny(), 'preset-filled': getAny() }],
      },
      conflictingClassGroups: {
        'vuetiful.preset': ['bg-color', 'text-color'],
        'bg-color': ['vuetiful.preset'],
        'text-color': ['vuetiful.preset'],
      },
    },
  });

  return mergedConfigs;
};

export const tm = extendTailwindMerge(withVuetiful);
