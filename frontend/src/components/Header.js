export const Header = () => {

  return(
<header className="text-white py-6 shadow-lg">
  <div className="container mx-auto flex items-center justify-between">
    <div className="flex items-center space-x-6">
      <img
        src="https://emt.gartnerweb.com/ngw/commonassets/images/build-graphics/gartner-logos/gartner.svg"
        alt="Gartner Logo"
        className="h-24" // Adjust the height as needed
      />
      <nav className="flex space-x-4 text-gray-600">
        <a href="#" className="hover:underline">Insights</a>
        <a href="#" className="hover:underline">Expert</a>
        <a href="#" className="hover:underline">Guidance</a>
        <a href="#" className="hover:underline">Tools</a>
        <a href="#" className="hover:underline">Connect with Peers</a>
      </nav>
    </div>
    <a href="#" className="bg-custom-blue text-white px-4 py-2 rounded-md hover:bg-blue-700">Become a Client</a>
  </div>
</header>
  )
}