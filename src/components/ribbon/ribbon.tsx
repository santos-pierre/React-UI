export type RibbonProps = {
  position?: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
  size?: 'sm' | 'md' | 'lg';
  color?: 'amber' | 'green' | 'purple' | 'cyan';
  children: React.ReactNode;
};

const sizeClasses: Record<NonNullable<RibbonProps['size']>, string> = {
  sm: 'w-24',
  md: 'w-28',
  lg: 'w-36',
};

const posistionClasses: Record<
  NonNullable<RibbonProps['position']>,
  {
    wrapper: string;
    shadeOne: string;
    shadeTwo: string;
    banner: string;
  }
> = {
  'top-left': {
    wrapper: '-top-2 -left-2',
    shadeOne: 'top-0 right-0',
    shadeTwo: 'bottom-0 left-0',
    banner: 'bottom-0 left-0 origin-bottom-left -rotate-45',
  },
  'top-right': {
    wrapper: '-top-2 -right-2',
    shadeOne: 'top-0 left-0',
    shadeTwo: 'bottom-0 right-0',
    banner: 'bottom-0 right-0 origin-bottom-right rotate-45',
  },
  'bottom-right': {
    wrapper: '-bottom-2 -right-2',
    shadeOne: 'top-0 right-0',
    shadeTwo: 'bottom-0 left-0',
    banner: 'top-0 right-0 origin-top-right -rotate-45',
  },
  'bottom-left': {
    wrapper: '-bottom-2 -left-2',
    shadeOne: 'top-0 left-0',
    shadeTwo: 'bottom-0 right-0',
    banner: 'top-0 left-0 origin-top-left rotate-45',
  },
};

const colorClasses: Record<
  NonNullable<RibbonProps['color']>,
  {
    shades: string;
    banner: string;
  }
> = {
  amber: {
    shades: 'bg-amber-500',
    banner: 'bg-amber-300 text-amber-800 hover:bg-yellow-300',
  },
  cyan: {
    shades: 'bg-cyan-500',
    banner: 'bg-cyan-300 text-cyan-800 hover:bg-sky-300',
  },
  green: {
    shades: 'bg-green-500',
    banner: 'bg-green-300 text-green-800 hover:bg-emerald-300',
  },
  purple: {
    shades: 'bg-purple-500',
    banner: 'bg-purple-300 text-purple-800 hover:bg-violet-300',
  },
};

export const Ribbon = ({
  size = 'md',
  color = 'amber',
  position = 'top-right',
  children,
}: RibbonProps) => {
  return (
    <div
      className={`${sizeClasses[size]} ${posistionClasses[position].wrapper} overflow-hidden aspect-square absolute rounded-sm`}
    >
      <div
        className={`${posistionClasses[position].shadeOne} ${colorClasses[color].shades} h-2 w-2 absolute`}
      ></div>
      <div
        className={`${posistionClasses[position].shadeTwo} ${colorClasses[color].shades} h-2 w-2 absolute`}
      ></div>
      <a
        href='#'
        className={`${posistionClasses[position].banner} ${colorClasses[color].banner} py-1.5 font-semibold uppercase text-xs tracking-wider block w-square-diagonal text-center absolute shadow-sm`}
      >
        {children}
      </a>
    </div>
  );
};
