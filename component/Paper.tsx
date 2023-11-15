type PaperProps = {
  children: React.ReactNode;
};
export function Paper({ children }: PaperProps) {
  return <div className="w-12 h-fit p-4 bg-white rounded-md shadow-md shadow-black">{children}</div>;
}
