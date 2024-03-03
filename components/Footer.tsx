

const Footer = () => {
  return (
    <div className="grid md:grid-cols-3 bg-black text-white py-4 text-xl ">
        <div className="flex justify-center items-center">
            <p className="font-bold text-red-400 underline cursor-pointer">((!))</p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p>Quick links</p>
            <p>Terms and conditions</p>
            <p>Refund and other polices</p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p>Download the app from playstore</p>
            <p>Follow us on twitter..</p>
        </div>
    </div>
  )
}

export default Footer