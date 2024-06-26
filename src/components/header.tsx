import { signIn, signOut, useSession } from "next-auth/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Image from "next/image";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <header className="w-full border-b bg-neutral-950">
      <div className="w-full  flex justify-between items-center py-4 lg:max-w-xl mx-auto px-3 md:px-12 lg:px-0">
        <div className="flex gap-2 items-center">
          <Image
            src="/logo.png"
            width={100}
            height={108}
            alt="Logo do App Notes"
            className="invert brightness-0 w-8"
          />
          <h1 className="text-white text-xl font-semibold">
            App Notes
          </h1>
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>
              {
                sessionData ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="overflow-hidden rounded-full flex items-center gap-2 pr-1"
                      >
                        Olá, {sessionData.user?.name?.split(" ")[0]}
                        <Image
                          src={sessionData.user?.image ?? "/placeholder-user.webp"}
                          width={36}
                          height={36}
                          alt={`Imagem de perfil de ${sessionData.user?.name}`}
                          className="overflow-hidden rounded-full"
                        />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Conta</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <Button
                        variant="ghost"
                        className="min-w-52 w-full bg-red-600/10 text-red-600 hover:bg-red-600/20 hover:text-red-600"
                        size='sm'
                        onClick={() => void signOut()}
                      >
                        Sair
                      </Button>

                    </DropdownMenuContent>
                  </DropdownMenu>
                ) :
                  <Button
                    variant="outline"
                    onClick={() => void signIn()}
                  >
                    Acessar
                  </Button>
              }
            </li>
          </ul>
        </nav>
      </div>
    </header >
  );
}