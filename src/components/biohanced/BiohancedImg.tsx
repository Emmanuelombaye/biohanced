type BiohancedImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
};

export function BiohancedImg({
  alt,
  className = "",
  decoding = "async",
  loading = "lazy",
  ...props
}: BiohancedImgProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} className={className} decoding={decoding} loading={loading} {...props} />
  );
}
