import React, { useState } from "react"

type FileUploadProps = {
  label?: string
  onFileSelect: (file: File | null) => void
  maxSizeInMB?: number
  acceptedTypes?: string[]
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label = "Carregar CV",
  onFileSelect,
  maxSizeInMB = 5,
  acceptedTypes = [".pdf", ".doc", ".docx"],
}) => {
  const [fileName, setFileName] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    const isAccepted = acceptedTypes.some(type => file.name.endsWith(type))
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024

    if (!isAccepted) {
      setError("Tipo de arquivo inválido. Use PDF ou DOCX.")
      setFileName("")
      onFileSelect(null)
      return
    }

    if (file.size > maxSizeInBytes) {
      setError(`Arquivo muito grande. Máximo de ${maxSizeInMB}MB.`)
      setFileName("")
      onFileSelect(null)
      return
    }

    setError("")
    setFileName(file.name)
    onFileSelect(file)
  }

  const handleReset = () => {
    setFileName("")
    setError("")
    onFileSelect(null)
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        id="cvUpload"
        type="file"
        accept={acceptedTypes.join(",")}
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
        aria-label="Upload do currículo"
      />
      {fileName && (
        <div className="text-sm text-gray-600 flex items-center justify-between">
          <span>{fileName}</span>
          <button
            onClick={handleReset}
            className="text-red-500 text-xs hover:underline"
            aria-label="Remover arquivo selecionado"
          >
            Remover
          </button>
        </div>
      )}
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}
