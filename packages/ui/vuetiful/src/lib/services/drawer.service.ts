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
  position: 'left',
  duration: 300,
  regionBackdrop: '',
  regionDrawer: '',
});

const useDrawer = () => {
  const open = (settings?: DrawerSettings) => {
    drawer.open = true;
    drawer.id = settings?.id ?? 'default';
    drawer.duration = settings?.duration ?? 300;
    drawer.regionBackdrop = settings?.regionBackdrop ?? '';
    drawer.regionDrawer = settings?.regionDrawer ?? '';
    drawer.position = settings?.position ?? 'left';
  };

  const close = () => {
    drawer.open = false;
  };

  return {
    drawer: readonly(drawer),
    open,
    close,
  };
};

export { useDrawer };
