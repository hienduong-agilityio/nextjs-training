import twConfig from '@/../tailwind.config';

type BorderRadiusConfig = Record<string, string>;

const BorderRadiusStories = {
  title: 'Configuration/Border Radius',
};

const { borderRadius } = twConfig.theme as {
  borderRadius: BorderRadiusConfig;
};

export const BorderRadius = () => {
  const keys = Object.keys(borderRadius);

  return (
    <div className="space-y-4">
      {keys.map((key) => {
        const name = key === 'DEFAULT' ? '' : `-${key}`;
        return (
          <div
            key={key}
            className="flex flex-row items-center font-mono text-sm"
          >
            <span className="mr-1 min-w-24 shrink-0 text-gray-darker">
              rounded{name}
            </span>
            <div
              className="ml-2 flex h-10 w-72 items-center bg-primary-50 pl-3"
              style={{ borderRadius: borderRadius[key] }}
            >
              {`border-radius: "${borderRadius[key]}"`}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BorderRadiusStories;
