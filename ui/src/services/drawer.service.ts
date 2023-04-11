import { reactive, readonly } from 'vue';

export interface DrawerSettings {
  id?: string;
  open?: boolean;

  position?: 'left' | 'top' | 'right' | 'bottom';
  duration?: 150 | 300;

  regionBackdrop?: string;
  regionDrawer?: string;

  [key: string]: unknown;
}

const drawer = reactive<DrawerSettings>({
  id: 'default',
  open: false,
});

const useDrawer = () => {
  const open = (settings?: DrawerSettings) => {
    drawer.open = true;
    if (settings) {
      Object.keys(settings).forEach((key: string) => {
        drawer[key] = settings[key];
      });
    }
  };

  const close = () => (drawer.open = false);

  const toggle = () => (drawer.open = !drawer.open);

  return {
    drawer: readonly(drawer),
    open,
    close,
    toggle,
  };
};

export { useDrawer };
