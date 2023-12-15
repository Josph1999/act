export default function DonorBox({width}) {
  const iframeCode = `
  <iframe src="https://donorbox.org/embed/david-bezhuashvili-education-foundation-dbef" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height=600px" width=${width} style=" min-width: 250px; max-height:none!important; border-radius: 10px; overflow-x: auto; border: none !important;" id="dbefDonate"></iframe>
    `;

  return <div dangerouslySetInnerHTML={{ __html: iframeCode }} />;
}
