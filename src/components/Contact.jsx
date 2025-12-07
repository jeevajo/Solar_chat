export default function Contact() {
  return (
    <div className="pt-28 px-6 md:px-20 pb-20">
      <h1 className="text-4xl font-bold text-kyarrBlue">Contact Us</h1>

      <div className="mt-8 space-y-4 text-lg text-gray-700">
        <p><b>📞 Phone:</b> <a href="tel:+917904294362" className="text-kyarrBlue">+91 7904294362</a></p>
        <p><b>💬 WhatsApp:</b> <a href="https://wa.me/917904294362" className="text-kyarrBlue">+91 7904294362</a></p>
        <p><b>📧 Email:</b> <a href="mailto:orcqind@gmail.com" className="text-kyarrBlue">orcqind@gmail.com</a></p>
        <p><b>📍 Location:</b> Coimbatore</p>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Send Us a Message</h2>
        <form className="space-y-4 max-w-xl">
          <input type="text" placeholder="Your Name" className="border p-3 rounded w-full"/>
          <input type="email" placeholder="Your Email" className="border p-3 rounded w-full"/>
          <input type="text" placeholder="Phone Number" className="border p-3 rounded w-full"/>
          <textarea placeholder="Message" rows="5" className="border p-3 rounded w-full"></textarea>
          <button type="submit" className="bg-kyarrBlue text-white px-6 py-3 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
}
