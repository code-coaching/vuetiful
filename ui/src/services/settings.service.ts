import { reactive } from "vue";

interface UnstyledSettings {
  unstyled: boolean;
}

interface GlobalSettings extends UnstyledSettings {}
interface RadioGroupSettings extends UnstyledSettings {}
interface RadioItemSettings extends UnstyledSettings {}

export interface VuetifulSettings {
  global: GlobalSettings;
  components: {
    radioGroup: RadioGroupSettings;
    radioItem: RadioItemSettings;
  };
}

const settings = reactive({
  global: {
    unstyled: false,
  },
  components: {
    radioGroup: {
      unstyled: false,
    },
    radioItem: {
      unstyled: false,
    },
    switch: {
      unstyled: false,
    },
    avatar: {
      unstyled: false,
    },
    badge: {
      unstyled: false,
    },
    button: {
      unstyled: false,
    },
    chip: {
      unstyled: false,
    },
    codeBlock: {
      unstyled: false,
    },
    listbox: {
      unstyled: false,
    },
    listboxItem: {
      unstyled: false,
    },
    accordion: {
      unstyled: false,
    },
    accordionItem: {
      unstyled: false,
    }
  },
});

const useSettings = () => {
  const updateSettings = (partialSettings: Partial<VuetifulSettings>) => {
    for (const key in partialSettings) {
      if (key in settings) {
        Object.assign((settings as any)[key], (partialSettings as any)[key]);
      }
    }
  };

  return {
    updateSettings,
    settings,
  };
};

export { useSettings };
