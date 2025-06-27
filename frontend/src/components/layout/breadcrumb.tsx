import React from "react"
import { Link } from "react-router-dom"

type Crumb = {
  label: string
  href?: string
}

type BreadcrumbProps = {
  items: Crumb[]
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link to={item.href} className="hover:underline text-blue-600">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-800 font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
