export default function Contact() {
  return (
    <div className="pt-24">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-gray-600 mt-2">Provide your contact details (phone / email / address) to replace the placeholders.</p>

        <form className="mt-6 bg-white p-6 rounded shadow grid gap-3">
          <input placeholder="Full name" className="border p-3 rounded"/>
          <input placeholder="Phone or WhatsApp" className="border p-3 rounded"/>
          <input placeholder="Email" className="border p-3 rounded"/>
          <textarea placeholder="Message" rows="4" className="border p-3 rounded"></textarea>
          <button className="bg-kyarrBlue text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </div>
  )
}
