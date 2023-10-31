export default function GoogleMaps() {
  const iframeCode = `
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.4691213717065!2d44.7393000767252!3d41.73197317125824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044730161471cc1%3A0x172564d407eacf2c!2zMTgg4YOS4YOQ4YOW4YOQ4YOk4YOu4YOj4YOa4YOY4YOhIOGDpeGDo-GDqeGDkCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1698488363424!5m2!1ska!2sge"
      width="100%"
      height="636px"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  `;

  return <div dangerouslySetInnerHTML={{ __html: iframeCode }} />;
}
