function Contact() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-4 bg-gray-100">
      <h1 className="text-blue-400 font-bold text-2xl uppercase">Contact Us</h1>
      <form className="flex flex-col gap-6 border-2 border-gray-300 px-10 py-10 w-100 bg-white">
        <div className="flex flex-col gap-2">
          <label>Full Name :</label>
          <input type="text" placeholder="Enter your Full Name" className="border border-gray-200 py-1 px-2" required />
        </div>

        <div className="flex flex-col gap-2">
          <label>Email : </label>
          <input type="email" placeholder="Enter your Email" className="border border-gray-200 py-1 px-2" required />
        </div>

        <div className="flex flex-col gap-2">
          <label>Subject : </label>
          <input type="text" placeholder="Enter your subject" className="border border-gray-200 py-1 px-2" required />
        </div>

        <div className="flex flex-col gap-2">
          <label>Message : </label>
          <textarea placeholder="Enter your message" className="border border-gray-200 py-1 px-2" required></textarea>
        </div>

        <button className="bg-blue-400 py-2 font-bold text-white">Send Message</button>
      </form>
    </div>
  )
}

export default Contact