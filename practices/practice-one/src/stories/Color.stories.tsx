import twConfig from '@/../tailwind.config';
import { twMerge } from 'tailwind-merge';

type TailwindColors = Record<string, string | Record<string, string>>;

type ColorsStoriesProps = {
  title: string;
};

type ProcessColorProps = {
  name?: string;
  prefix: string;
  colors: TailwindColors;
  className?: string;
};

type ColorProps = {
  prefix?: string;
  name?: string;
  color: string;
  hex: string;
  className?: string;
};

const ColorsStories: ColorsStoriesProps = {
  title: 'Configuration/Colors',
};

const { colors } = twConfig.theme as { colors: TailwindColors };

export const Colors = () => {
  return (
    <div className="my-4">
      <ProcessColor colors={colors} prefix="bg" className="my-6" />
    </div>
  );
};

const ProcessColor = ({
  name,
  prefix,
  colors,
  className = '',
}: ProcessColorProps) => {
  const keys = Object.keys(colors).reverse();
  return (
    <>
      {keys.map((key) => {
        const value = colors[key];
        return typeof value === 'string' ? (
          <Color
            key={key}
            prefix={prefix}
            name={name}
            color={key}
            hex={value}
            className={className}
          />
        ) : (
          <div key={key} className="my-6 border-t border-gray-lighter pt-4">
            <div className="font-bold uppercase">{key ?? ''}</div>
            <div className="grid w-[700px] grid-cols-3 gap-x-2 gap-y-4 xl:gap-4 2xl:w-full 2xl:grid-cols-6">
              <ProcessColor
                prefix={prefix}
                name={key}
                colors={value}
                className="my-2"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

const Color = ({
  prefix = 'bg',
  name,
  color,
  hex,
  className = '',
}: ColorProps) => {
  const colorName = name ? `-${name}` : '';
  const key = color === 'DEFAULT' ? colorName : `${colorName}-${color}`;

  return (
    <div className={twMerge('flex flex-col font-mono text-sm', className)}>
      <div
        className="h-10 w-10 rounded-full border border-gray-lighter"
        style={{ backgroundColor: hex }}
      >
        &nbsp;
      </div>
      {prefix}
      {key} {hex}
    </div>
  );
};

export default ColorsStories;
