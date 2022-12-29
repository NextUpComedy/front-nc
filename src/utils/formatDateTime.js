export default function formatDateTime(isoDate) {
  const [date, time] = [
    isoDate.split('T')[0],
    isoDate.split('T')[1].split('.')[0].slice(0, -3),
  ];
  return `${date} / ${time}`;
}
