import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
//import type { userProps } from "@/types/user";
//import { LogOut } from "lucide-react";

//const linkStyles = "hover:text-cyan-300";


export const Header = () => {
  return (
<header className="bg-gradient-to-r from-cyan-500 to-cyan-900 px-20 py-4 flex items-start justify-between text-white">
  <h1 className="text-2xl font-bold">Ku Thola</h1>
  <div className="flex items-center gap-16">
        <nav className="space-x-8 text-lg">
        </nav>
          <div className="flex items-center gap-4">
            <p className="text-xl font-medium"></p>
          </div>
        
          <div className="space-x-4">
            <Link to={"/login"}>Iniciar sessão</Link>
            <Link to="/register">
              <Button
                size={"sm"}
                className="bg-white rounded-md text-cyan-600 px-4 py-2 font-medium"
              >
                Registrar-se
              </Button>
            </Link>
          </div>
      
      </div>
</header>
  )
}

