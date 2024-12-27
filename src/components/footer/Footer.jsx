import { communityLinks, platformLinks, resourcesLinks } from "./FDetails"

const Footer = () => {
  return (
    <footer className=" my-3 pt-5 border-neutral-700">
        <div className="grid grid-cols-2 ml-10  lg:grid-cols-3 gap-4">
            <div>
                <h3 className="text-md font-semibold md-4">Resourse</h3>
                <ul className="space-y-2">
                    {
                        resourcesLinks.map((link,index)=>(
                            <li key={index}>
                                <a className="text-neutral-800 hover:text-black" href={link.href}>{link.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold md-4">platform</h3>
                <ul className="space-y-2">
                    {
                        platformLinks.map((link,index)=>(
                            <li key={index}>
                                <a className="text-neutral-900 hover:text-black" href={link.href}>{link.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="mt-3 lg:mt-0">
                <h3 className="text-md font-semibold md-4">community</h3>
                <ul className="space-y-2">
                    {
                        communityLinks.map((link,index)=>(
                            <li key={index}>
                                <a className="text-neutral-800 hover:text-black" href={link.href}>{link.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
