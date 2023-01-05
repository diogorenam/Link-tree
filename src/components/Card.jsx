function Card({linkSite, nomeRede}){
return(
  <>
  <ul>
    <li>
      <a href={linkSite} target= "_blank" rel="noreferrer">{nomeRede}</a>
    </li>
  </ul>
  </>
)
}
export default Card