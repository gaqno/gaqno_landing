'use client'
import React, { useState } from 'react'
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '@/components/ui/navbar-menu'
import { cn } from '@/utils/cn'
import { DarkModeToggle } from './DarkModeToggle'

import NewcoreImage from '@/public/img/newcore.webp'
import FFIDImage from '@/public/img/ffid.webp'
import RedeAncoraImage from '@/public/img/rede-ancora.webp'
import ATECHImage from '@/public/img/atech.webp'
import AmbevImage from '@/public/img/ambev.webp'

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div
      className={cn(
        'fixed top-10 inset-x-0 mx-auto md:ml-[73%] z-50 w-auto max-w-[14em]',
        className,
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex flex-row items-center gap-4">
          <MenuItem setActive={setActive} active={active} item="Inicio">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#sobre">Quem sou?</HoveredLink>
              <HoveredLink href="#techs">Técnologias</HoveredLink>
              <HoveredLink href="#projetos">Projetos</HoveredLink>
              <HoveredLink href="#caminho">Meu caminho</HoveredLink>
              <HoveredLink href="#contact">Contato</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Projetos">
            <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
              <ProductItem
                title="NewCore"
                href="#projetos/newcore"
                src={NewcoreImage}
                description="E-commerce com CMS e integrações para catálogo vivo e checkouts rápidos."
              />
              <ProductItem
                title="FFID"
                href="#projetos/ffid"
                src={FFIDImage}
                description="Site institucional com CMS e integrações para catálogo vivo e checkouts rápidos."
              />
              <ProductItem
                title="Rede Ancora"
                href="#projetos/rede-ancora"
                src={RedeAncoraImage}
                description="Site institucional com CMS e integrações para catálogo vivo e checkouts rápidos."
              />
              <ProductItem
                title="ATECH"
                href="#projetos/atech"
                src={ATECHImage}
                description="Site institucional com CMS e integrações para catálogo vivo e checkouts rápidos."
              />
              <ProductItem
                title="Ambev"
                href="#projetos/ambev"
                src={AmbevImage}
                description="Site institucional com CMS e integrações para catálogo vivo e checkouts rápidos."
              />
            </div>
          </MenuItem>
          <DarkModeToggle />
        </div>
      </Menu>
    </div>
  )
}
