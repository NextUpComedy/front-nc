import PropsTypes from 'prop-types';

export default function Image({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

Image.propTypes = {
  src: PropsTypes.string.isRequired,
  alt: PropsTypes.string.isRequired,
  className: PropsTypes.string.isRequired,
};
