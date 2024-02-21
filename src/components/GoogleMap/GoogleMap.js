export default function GoogleMaps() {
  const iframeCode = `
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.738923478317!2d44.762477890369986!3d41.72615219715215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472de53bbf6db%3A0x6dea130564ab7a74!2zMiDhg5Dhg5rhg5Thg6Xhg6Hhg5Dhg5zhg5Phg6Dhg5Qg4YOn4YOQ4YOW4YOR4YOU4YOS4YOY4YOhIOGDkuGDkOGDm-GDluGDmOGDoOGDmCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1708365960051!5m2!1ska!2sge" width="100%" height="636px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;

  return <div dangerouslySetInnerHTML={{ __html: iframeCode }} />;
}
