import { useState } from 'react'
import './header.css'

export default function Header() {
  const [show, setShow] = useState(false)
  const [account, setAccount] = useState('')
  const CHAIN = 11155111

  const showMenu = () => {
    setShow(true)
  }
  const hideMenu = () => {
    setShow(false)
  }
  const formatAddress = (address: string, show = 8) => {
    if(!address) {
      return ''
    }

    const len = address.length
    if(len < (show * 2 + 3)) {
      return address
    }

    return address.substring(0, show) + '...' + address.substring(len - show)
  }

  const connectWallet = async () => {
    const w = (window as any).ethereum
    if (!w) {
      return
    }
    
    try {
      const accounts = await w.request({ method: 'eth_requestAccounts' })
  
      // chain
      const id = await w.request({
        method: 'eth_chainId',
        params: []
      })

      console.log(11, id)
  
      if(Number(id) !== CHAIN) {
        await w.request({
          method: 'wallet_switchEthereumChain',
          params: [
            {
              chainId: '0x' + Number(CHAIN).toString(16)
            }
          ]
        })
      }
      
      setAccount(accounts[0])

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='h-wrapper'>
        <span className='h-menu' onClick={showMenu}></span>
        <div className="h-actions">
          <span className='h-link'>Docs</span>
          <span className='h-link'>Onboard</span>
          <span className='h-btn h-gap'>Join Whitelist</span>
          {
            account
              ? <span className='h-btn'>{formatAddress(account)}</span>
              : <span className='h-btn h-btn-primary' onClick={connectWallet}>Connect Wallet</span>
          }
        </div>
      </div>
      {
        show ? (
        <div className="h-drop">
          <div className="h-drop-close"onClick={hideMenu}></div>
          <div className="h-drop-items">
            <div className='h-drop-item'>Docs</div>
            <div className='h-drop-item'>Onboard</div>
            <div className='h-drop-btn'>JoinWaitlist</div>
            {
              account
                ? <div className='h-drop-btn'>{formatAddress(account)}</div>
                : <div className='h-drop-btn h-drop-btn-active' onClick={connectWallet}>Connect Wallet</div>
            }
          </div>
        </div>
        ) : null
      }
    </>
  )
}