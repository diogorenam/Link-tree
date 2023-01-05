function Header({url, alt, className, nome}){
return(
  <>
  <img className={className} src={url} alt={alt} />
  <h1>{nome}</h1>
  </>
)
}
export default Header