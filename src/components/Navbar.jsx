import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [['Home','/'],['Products','/products'],['Specialization','/specialization'],['SmartGrid','/smartgrid'],['About','/about']]
export default function Navbar(){
 const [open,setOpen]=useState(false)
 const item=({isActive})=>`nav-link ${isActive?'nav-link-active':''}`
 return <header className="site-header"><div className="nav-inner">
  <Link to="/" className="brand" onClick={()=>setOpen(false)}><img src="/images/logo.jpg" alt="KYARR logo"/><span><b>KYARR INCORP</b><small>The Royal Power Of A New Era</small></span></Link>
  <nav className="desktop-nav" aria-label="Main navigation">{links.map(([name,path])=><NavLink key={path} to={path} end={path==='/'} className={item}>{name}</NavLink>)}<NavLink to="/contact" className="nav-cta">Let's Talk <span>↗</span></NavLink></nav>
  <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button>
 </div>{open&&<nav className="mobile-nav">{links.map(([name,path])=><NavLink key={path} to={path} end={path==='/'} className={item} onClick={()=>setOpen(false)}>{name}</NavLink>)}<Link to="/contact" className="nav-cta" onClick={()=>setOpen(false)}>Let's Talk ↗</Link></nav>}</header>
}
