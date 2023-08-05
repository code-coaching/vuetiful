import { reactive } from "vue";

interface UnstyledSettings {
  unstyled: boolean;
}

interface GlobalSettings extends UnstyledSettings {}
interface RadioGroupSettings extends UnstyledSettings {}
interface RadioItemSettings extends UnstyledSettings {}
interface AccordionSettings extends UnstyledSettings {}
interface AccordionItemSettings extends UnstyledSettings {}
interface AlertSettings extends UnstyledSettings {}
interface AvatarSettings extends UnstyledSettings {}
interface BadgeSettings extends UnstyledSettings {}
interface ButtonSettings extends UnstyledSettings {}
interface ListboxSettings extends UnstyledSettings {}
interface ListboxItemSettings extends UnstyledSettings {}
interface CodeBlockSettings extends UnstyledSettings {}
interface SwitchSettings extends UnstyledSettings {}
interface CardSettings extends UnstyledSettings {}
interface CardHeaderSettings extends UnstyledSettings {}
interface CardBodySettings extends UnstyledSettings {}
interface CardFooterSettings extends UnstyledSettings {}

export interface VuetifulSettings {
  global: GlobalSettings;
  components: Partial<{
    avatar: AvatarSettings;
    alert: AlertSettings;
    badge: BadgeSettings;
    button: ButtonSettings;
    codeBlock: CodeBlockSettings;
    switch: SwitchSettings;

    accordion: AccordionSettings;
    accordionItem: AccordionItemSettings;

    listbox: ListboxSettings;
    listboxItem: ListboxItemSettings;

    radioGroup: RadioGroupSettings;
    radioItem: RadioItemSettings;

    card: CardSettings;
    cardHeader: CardHeaderSettings;
    cardBody: CardBodySettings;
    cardFooter: CardFooterSettings;
  }>;
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
    },
    alert: {
      unstyled: false,
    },
    card: {
      unstyled: false,
    },
    cardHeader: {
      unstyled: false,
    },
    cardBody: {
      unstyled: false,
    },
    cardFooter: {
      unstyled: false,
    },
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
