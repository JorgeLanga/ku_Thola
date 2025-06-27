import React from "react"
import { Button } from "../ui/Button" 

type CardActionsProps = {
  onView?: () => void
  onEdit?: () => void
  onDelete?: () => void
}

export const CardActions: React.FC<CardActionsProps> = ({ onView, onEdit, onDelete }) => {
  return (
    <div className="flex gap-2 mt-3">
      {onView && <Button variant="outline" size="sm" onClick={onView}>Ver</Button>}
      {onEdit && <Button variant="outline" size="sm" onClick={onEdit}>Editar</Button>}
      {onDelete && <Button variant="destructive" size="sm" onClick={onDelete}>Excluir</Button>}
    </div>
  )
}
