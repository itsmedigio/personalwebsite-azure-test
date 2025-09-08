
export function Footer() {
  return (
    <footer className="bg-background border-t py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© 2025 itsmedigio.github.io - P.IVA 13306860019</p>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com/itsmedigio/personalwebsite-azure-test" target="_blank" rel="noopener noreferrer">Made with Next.js and hosted in GitHub Pages</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
