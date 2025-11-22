import { clsxtw } from '../../utils/clsxtw';

function IconCampaings({
  className,
  ...props
}: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={clsxtw('pointer-events-none align-middle', className)}
      {...props}
    >
      <path d="m54 7h-44c-1.7 0-3 1.3-3 3v44c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3v-44c0-1.7-1.3-3-3-3zm1 47c0 .6-.4 1-1 1h-44c-.6 0-1-.4-1-1v-37h46zm0-39h-46v-5c0-.6.4-1 1-1h44c.6 0 1 .4 1 1z"></path>
      <path d="m16 11h-4c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1z"></path>
      <circle cx="51" cy="12" r="1"></circle>
      <circle cx="47" cy="12" r="1"></circle>
      <circle cx="43" cy="12" r="1"></circle>
      <path d="m13 36h38c.6 0 1-.4 1-1s-.4-1-1-1h-1v-9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v9h-2v-11c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v11h-2v-7c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v7h-2v-5c0-.6-.4-1-1-1h-5v-7c0-.6-.4-1-1-1s-1 .4-1 1v14c0 .6.4 1 1 1zm31-10h4v8h-4zm-10-2h4v10h-4zm-10 4h4v6h-4zm-6 2v4h-4v-4z"></path>
      <path d="m25 41c-1.7 0-3 1.3-3 3v4c0 .6.4 1 1 1s1-.4 1-1v-1h2v1c0 .6.4 1 1 1s1-.4 1-1v-4c0-1.7-1.3-3-3-3zm-1 4v-1c0-.6.4-1 1-1s1 .4 1 1v1z"></path>
      <path d="m32 41h-2c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h2c1.7 0 3-1.3 3-3v-2c0-1.7-1.3-3-3-3zm1 5c0 .6-.4 1-1 1h-1v-4h1c.6 0 1 .4 1 1z"></path>
      <path d="m38.5 43h2.5c.6 0 1-.4 1-1s-.4-1-1-1h-2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h1c.3 0 .5.2.5.5s-.2.5-.5.5h-2.5c-.6 0-1 .4-1 1s.4 1 1 1h2.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5z"></path>
      <path d="m13 52h38c.6 0 1-.4 1-1v-12c0-.6-.4-1-1-1h-38c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1zm1-12h36v10h-36z"></path>
    </svg>
  );
}

export { IconCampaings };
