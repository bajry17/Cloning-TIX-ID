import { useState } from "react"

function App()
{
  return (
    <>
    <Navbar/>
      <div className="row mx-1">
        <div className="col p-0">
          <Main/>
        </div>
      </div>
      <Footer/>
    </> 
  )
}

function Navbar()
{
  return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary pt-4 pb-3 container-fluid sticky-top">
      <div className="container">
        <a className="" href="#">
          <img src="https://asset.tix.id/wp-content/uploads/2021/10/TIXID_logo_blue-300x82.png" width={150}/>
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item text-black ms-5" style={{fontWeight: 'bold', textDecoration: 'none'}} href="">HOME</a>
            <a className="nav-item text-black ms-5" style={{fontWeight: 'bold', textDecoration: 'none'}} href="">TIX NOW</a>
            <a className="nav-item text-black ms-5" style={{fontWeight: 'bold', textDecoration: 'none'}} href="">TIX EVENTS</a>
            <a className="nav-item text-black ms-5" style={{fontWeight: 'bold', textDecoration: 'none'}} href="">CAREERS</a>
            <a className="nav-item text-black ms-5" href=""><i className="bi bi-instagram"></i></a>
            <a className="nav-item text-black ms-4" href=""><i className="bi bi-youtube"></i></a>
            <a className="nav-item text-black ms-4" href=""><i className="bi bi-facebook"></i></a>
            <a className="nav-item text-black ms-4" href=""><i className="bi bi-twitter"></i></a>
            <a className="nav-item text-black ms-5" style={{textDecoration: 'none'}} href=""><ButtonAuth label="DOWNLOAD TIX ID" mode="gold" onClick={() => {}}/></a>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

function FilmCard(props)
{
  return(
    <div key={props.key} className="col-3 text-white pe-2">
      <div className="card" style={{border: 'none'}}>
        <div className="card-body">
          <div>
            <img  src={props.item.image} style={{borderRadius: 20, height: 365, width: '100%'}}/>
          </div>
          <span className="h5 text-black" style={{fontSize: 18}}>{props.item.title}</span>        
        </div>
      </div>
    </div>
  )
}
function DescFilm(props)
{
  return(
    <div key={props.key} className="col-4 text-white pe-2">
      <div className="card" style={{border: 'none', backgroundColor:'#E5E7E8'}}>
        <div className="card-body">
          <div>
            <img  src={props.item.image} style={{borderRadius: 12, height: 200, width: '100%'}}/>
          </div>
          <span className="h5 text-black" style={{fontSize: 18}}>{props.item.title}</span>        
        </div>
      </div>
    </div>
  )
}
function ListJenis(props)
{
  return(
    <div key={props.key} className="col-6 text-white pe-2">
      <div className="card" style={{border: 'none'}}>
        <div className="card-body">
              <img  src={props.item.image} style={{borderRadius: 12, width: '100%'}}/>   
        </div>
      </div>
    </div>
  )
}
function ListPartner(props)
{
  return(
    <div key={props.key} className="col-3 pe-2">
      <div className="card" style={{border: 'none'}}>
        <div className="card-body">
              <img  src={props.item.image} style={{borderRadius: 12, width: '100%'}}/>   
        </div>
      </div>
    </div>
  )
}
function ListVideo(props)
{
  return(
    <div key={props.key} className="col-4 text-white pe-2">
      <div className="card" style={{border: 'none', backgroundColor:'#173E6B'}}>
        <div className="card-body">
          <div>
            <img  src={props.item.video} style={{borderRadius: 12, height: 200, width: '100%'}}/>
          </div>
          <span className="h5 text-white" style={{fontSize: 18, fontWeight: 'bold'}}>{props.item.title}</span>        
        </div>
      </div>
    </div>
  )
}
function InfoFilm(props)
{
  return(
    <div key={props.key} className="">
      <div className="card" style={{border: 'none'}}>
        <div className="card-body">
          <div className="row">
            <div className="col-5">
              <img  src={props.item.image} style={{borderRadius: 12, width: '100%'}}/>
            </div>
            <div className="col-7">
              <p className="h5 text-black " style={{fontSize: 17, fontWeight: 'bold'}}>{props.item.title}</p>
              <p className="text-black " style={{fontSize: 12}}>{props.item.date}</p>
              <p className="text-black " style={{fontSize: 15}}>{props.item.desc}</p>
            </div>    
          </div>    
        </div>
      </div>
    </div>
  )
}
function ListFilm(props)
{
  return(
    <div key={props.key} className="">
      <div className="card" style={{border: 'none'}}>
        <div className="card-body">
          <a className="h5 text-black " style={{fontSize: 20, fontWeight: 'bold', textDecoration: 'none'}} href="">{props.item.title}</a>
              <hr />
        </div>
      </div>
    </div>
  )
}
function Section(props)
{
  return(
    <div>
      <div className="d-flex justify-content-between">
        <span className="h2 text-black" style={{fontWeight: 'bold'}}>{props.title}</span>
      </div>
      <div className="row">
        {
          props.data?.map((item, key) =>  {
            return(
              <FilmCard key={key} item={item}/>
            )
          })  
        }
      </div>
    </div>
  )
}
function SectionDua(props)
{
  return(
    <div>
      <div className="d-flex justify-content-between">
        <span className="h2 text-black" style={{fontWeight: 'bold'}}>{props.title}</span>
      </div>
      <div className="row" >
        {
          props.data?.map((item, key) =>  {
            return(
              <DescFilm key={key} item={item}/>
            )
          })  
        }
      </div>
    </div>
  )
}
function SectionTiga(props)
{
  return(
    <div>
      <div className="d-flex justify-content-between">
        <span className="h2 text-black" style={{fontWeight: 'bold'}}>{props.title}</span>
      </div>
      <div className="row" >
        {
          props.data?.map((item, key) =>  {
            return(
              <InfoFilm key={key} item={item}/>
            )
          })  
        }
      </div>
    </div>
  )
}
function SectionEmpat(props)
{
  return(
    <div>
      <div className="row mt-5 " >
      <span className="ms-3">MORE NEWS</span>
        {
          props.data?.map((item, key) =>  {
            return(
              <ListFilm key={key} item={item}/>
            )
          })  
        }
      </div>
    </div>
  )
}
function SectionLima(props)
{
  return(
    <div>
      <div className="d-flex justify-content-between">
        <span className="h2 text-white" style={{fontWeight: 'bold'}}>{props.title}</span>
      </div>
      <div className="row" >
        {
          props.data?.map((item, key) =>  {
            return(
              <ListVideo key={key} item={item}/>
            )
          })  
        }
      </div>
    </div>
  )
}
function SectionEnam(props)
{
  return(
    <div>
      <div className="d-flex justify-content-between">
        <span className="h2 text-black" style={{fontWeight: 'bold'}}>{props.title}</span>
      </div>
      <div className="row" >
        {
          props.data?.map((item, key) =>  {
            return(
              <ListJenis key={key} item={item}/>
            )
          })  
        }
      </div>
    </div>
  )
}
function SectionTujuh(props)
{
  return(
    <div>
      <div className="d-flex justify-content-between">
        <span className="h2 text-black" style={{fontWeight: 'bold'}}>{props.title}</span>
      </div>
      <div className="row" >
        {
          props.data?.map((item, key) =>  {
            return(
              <ListPartner key={key} item={item}/>
            )
          })  
        }
      </div>
    </div>
  )
}

function Main()
{
  return(
    <>
      <div>
      </div>
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src="https://asset.tix.id/banner_promo_v2/8437c914-9245-485d-a433-dc0f757017b9.jpeg" className="d-block w-100" width={1350} />
          </div>
          <div className="carousel-item">
          <img src="https://asset.tix.id/banner_promo_v2/75870441-b7b3-4a24-bfc1-5832c85efb9f.jpeg" className="d-block w-100" width={1350} />
          </div>
          <div className="carousel-item">
          <img src="https://asset.tix.id/banner_promo_v2/4cde38a9-d6e3-41c0-b8e2-44943f711981.jpeg" className="d-block w-100" width={1350} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar w-50 bg-secondary"></div>
      </div>
      <div className="card mt-5 container" style={{border: 'none'}}>
        <div className="card-body">
          <Section title="NOW SHOWING IN CINEMAS" 
            showAll={() => {}} 
            data={[
              {
                title : "MEG 2: THE TRENCH",
                image : "https://asset.tix.id/wp-content/uploads/2023/08/23M2TH.jpg"
              },
              {
                title : "KETIKA BERHENTI DI SINI",
                image : "https://asset.tix.id/wp-content/uploads/2023/07/13KBDS.jpg"
              },
              {
                title : "BARBIE",
                image : "https://asset.tix.id/wp-content/uploads/2023/07/56886b60-57e0-4e74-9adf-1ac54cade1ed-1039x1200.jpeg"
              },
              {
                title : "OPPENHEIMER",
                image : "https://asset.tix.id/wp-content/uploads/2023/07/047e054c-1585-4c9d-bd3a-37185d558874-1213x1200.jpeg"
              }
            ]}
            />
        </div>
        <div className="d-flex justify-content-between">
          <ButtonContent icon="bi bi-arrow-left-circle" onClick={() => {}}/>
          <ButtonContent icon="bi bi-arrow-right-circle" onClick={() => {}}/>
        </div>
      </div>
      <div className="card mt-5 p-5" style={{border: 'none', backgroundColor: '#E5E7E8'}}>
        <div className="card-body container">
          <SectionDua title="SPOTLIGHT" 
            showAll={() => {}} 
            data={[
              {
                title : "Saatnya Kembali Bertemu Suzzanna di Suzzanna Malam...",
                image : "https://asset.tix.id/wp-content/uploads/2023/08/77f1912e-1f6a-46cc-90ef-5793b69a51a3.jpeg"
              },
              {
                title : "Belajar Move On Bersama Prilly Latuconsina di Fi...",
                image : "https://asset.tix.id/wp-content/uploads/2023/08/05871107-1c05-4f70-8587-928211e1bb12.jpeg"
              },
              {
                title : "Haunted Mansion, Adaptasi Wahana Legendaris di Dis...",
                image : "https://asset.tix.id/wp-content/uploads/2023/07/249e9c21-ffb7-4a25-8754-93d4a4b8a58b.jpeg"
              }
            ]}
            />
        </div>
        <div className="d-flex justify-content-between container">
          <ButtonContent icon="bi bi-arrow-left-circle" onClick={() => {}}/>
          <ButtonContent icon="bi bi-arrow-right-circle" onClick={() => {}}/>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
        <div className="col-7">
          <SectionTiga title="TIX NOW" 
              showAll={() => {}} 
              data={[
                {
                  title : "Suzzanna Malam Jumat Kliwon, Hampir Tembus 200 Ribu Penonton di Hari Pertama",
                  image : "https://asset.tix.id/wp-content/uploads/2023/08/3f3502b8-8f58-46c1-8387-414890d515ed.jpeg",
                  date : "Sunday, 06 August 2023",
                  desc : "Tengah tayang di bioskop, dilansir dari Liputan 6, flm Suzzana Malam Jumat Kliwon berhasil mendapatkan hampir 200 ribu penonton, atau tepatnya sekitar 193.623.Hal ini dikabarkan..."
                },
                {
                  title : "Awas Teror Meg 2: The Trench Sedang Tayang!",
                  image : "https://asset.tix.id/wp-content/uploads/2023/08/1f25fbc9-ef88-42b3-8999-dd75c36f0b58.jpeg",
                  date : "Friday, 04 August 2023",
                  desc : "Jadikan weekend lebih seru dengan film laga dan thriller Meg 2: The Trench yang masih akan dibintangi oleh aktor Jason Statham. Disutradarai oleh Ben Wheatley..."
                },
                {
                  title : "Segera Tayang, Teenage Mutant Ninja Turtles: Mutant Mayhem Dapat Skor 95% di Rotten Tomatoes!",
                  image : "https://asset.tix.id/wp-content/uploads/2023/08/ded0c6e3-ad79-440b-ad14-4108aaeb6b04.jpeg",
                  date : "Wednesday, 02 August 2023",
                  desc : "Semakin banyak film seru yang akan hadir di bulan Agustus untuk meramaikan bioskop, salah satunya ada film Teenage Mutant Ninja Turtles: Mutant Mayhem yang pertanggal..."
                },
                {
                  title : "Jason Statham Kembali Lawan Hiu Megalodon di Meg 2: The Trench!",
                  image : "https://asset.tix.id/wp-content/uploads/2023/07/be886448-42a1-4378-b09d-7d719c8e9c6f.jpeg",
                  date : "Thursday, 27 July 2023",
                  desc : "Baru-baru ini fans dari Jason Statham dihadiahkan trailer terbaru dari film Meg 2: The Trench yang masih akan menceritakan tentang pertarungan sengit Jason Statham melawan..."
                },
                {
                  title : "Refal Hady Harus Membantu Prilly Move On di Film Ketika Berhenti di Sini",
                  image : "https://asset.tix.id/wp-content/uploads/2023/07/cfc2a1bf-cf21-4412-b8ef-6c2b0e8f9a7d.png",
                  date : "Tuesday, 25 July 2023",
                  desc : "ÃÂ Segera tayang di bioskop tanah air mulai 27 Juli 2023, film Ketika Berhenti di Sini merupakan film yang disutradarai dan diproduseri oleh Umay Shahab. Tidak..."
                }
              ]}
              />
        </div>
        <div className="col-5">
          <SectionEmpat
              showAll={() => {}} 
              data={[
                {
                  title : "Refal Hady Harus Membantu Prilly Move On di Film Ketika Berhenti di Sini",
                },
                {
                  title : "Jajan di XXI Café Lebih Mudah Lewat TIX ID!.",
                },
                {
                  title : "My Precious, Hadirkan Kisah Lucu Cinta Monyet Semasa Sekolah",
                },
                {
                  title : "Inginkan Kualitas Sempurna, Pita Film Oppenheimer Miliki Panjang 17 Km!",
                },
                {
                  title : "Hidden Strike, Film Laga-Komedi Ala Jackie Chan dan John Cena!",
                },
                {
                  title : "Masih Tayang, Mission: Impossible Dead Reckoning Part One Dapat Rating Hampir Sempurna!",
                },
                {
                  title : "Teror Insidious Kembali Mulai Hari Ini!",
                },
                {
                  title : "Siap-Siap Berpetualang Bersama Barbie!",
                }
              ]}
              />
              <ButtonViews label="VIEW MORE ARTICLE" onClick={() => {}}/>
        </div>
        </div>
      </div>
        <div className="card mt-5 p-5" style={{border: 'none', backgroundColor: '#173E6B'}}>
        <div className="card-body container">
          <SectionLima title="VIDEO & TRAILERS" 
            showAll={() => {}} 
            data={[
              {
                title : "Official Trailer Di Ambang Kematian - 28 September...",
                video : "https://asset.tix.id/wp-content/uploads/2023/08/495c3605-ebf7-4c9a-8371-175103a251e6-146a8975-18d4-4897-b641-7faecd8f41d0.jpeg"
              },
              {
                title : "5 FILM MANUSIA MELAWAN MONSTER",
                video : "https://asset.tix.id/wp-content/uploads/2023/08/a92b5472-bbda-4ba5-8d55-1c021191f4c9-aeab50a3-55c5-4e91-b419-69cccf9786e8.jpeg"
              },
              {
                title : "Barbie - Wow",
                video : "https://asset.tix.id/wp-content/uploads/2023/08/02299116-13dc-4f4e-9f48-e7d9d3b3b497-ddc1fb70-f7fa-481e-ab99-9b287b85db3a.jpeg"
              }
            ]}
            />
        </div>
        <div className="d-flex justify-content-between container">
          <ButtonFilm icon="bi bi-arrow-left-circle" onClick={() => {}}/>
          <ButtonFilm icon="bi bi-arrow-right-circle" onClick={() => {}}/>
        </div>
      </div>
      <div className="card mt-5 p-5" style={{border: 'none'}}>
        <div className="card-body container">
          <SectionEnam title="OUR FEATURES" 
            showAll={() => {}} 
            data={[
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/feature4.webp"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/feature1.webp"
              },
            ]}
            />
        </div>
        <div className="d-flex justify-content-between container">
          <ButtonContent icon="bi bi-arrow-left-circle" onClick={() => {}}/>
          <ButtonContent icon="bi bi-arrow-right-circle" onClick={() => {}}/>
        </div>
        <div className="text-center container" style={{fontSize: 25, fontWeight: 'bold', color: '#173E6B'}}>
          <p>ENJOY THE BEST MOVIE AND ENTERTAINMENT, KEEP UP TO DATE WITH THE LATEST NEWS, AND GET ATTRACTIVE DEALS AND PROMOS!</p>
        </div>
        <div className="d-flex justify-content-center container">
          <ButtonBuy icon="bi bi-apple" label="App store" onClick={() => {}}/>
          <ButtonBuy icon="bi bi-google-play" label="Play store" onClick={() => {}}/>
        </div>
      </div>
      <div className="card mt-5 p-5" style={{border: 'none'}}>
        <div className="card-body container">
          <SectionTujuh title="OUR PARTNERS" 
            showAll={() => {}} 
            data={[
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/xxi.png"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/dana.png"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/cgv.png"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/cinepolis.png"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/vidio.png"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/appletv.png"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/googleplay.png"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/viu.png"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/bioskoponline.png"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/cacthplay.png"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/genflix.png"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/sushiroll.png"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/klikfilm.png"
              },
              {
                image : "https://asset.tix.id/wp-content/uploads/2022/01/visionplus.png"
              },
            ]}
            />
        </div>
      </div>
    </>
  )
}

function ButtonViews(props)
{
  return(
    <div className="container" onClick={props.onClick} style={{borderRadius: 20}}>
      <button className="p-2 ps-3 pl-3" style={{color: 'blue', fontWeight: "bold", borderRadius: 25, fontSize: 20}}>{props.label}</button>
    </div>
  )
}
function ButtonContent(props)
{
  return(
    <div className="d-flex text-black justify-content-center align-items-center m-1" style={{borderRadius: 25, backgroundColor: "transparent", width: 30, height: 30}} onClick={props.onClick}>
      <i style={{fontSize: 35, Color: "black"}} className={props.icon}></i>
    </div>
  )
}
function ButtonFilm(props)
{
  return(
    <div className="d-flex text-white justify-content-center align-items-center m-1" style={{borderRadius: 25, backgroundColor: "transparent", width: 30, height: 30}} onClick={props.onClick}>
      <i style={{fontSize: 35, Color: "black"}} className={props.icon}></i>
    </div>
  )
}

function ButtonAuth(props)
{
  return(
    <div className="px-3 py-2" onClick={props.onClick} style={{backgroundColor: props.mode === 'gold' ? '#D5A54F' : 'white', borderRadius: 20}}>
      <span style={{color: props.mode === 'dark' ? 'lightgrey' : 'black', fontWeight: "bold"}} >{props.label}</span>
    </div>
  )
}
function ButtonBuy(props)
{
  return(
    <div className="px-3 py-2 text-center" onClick={props.onClick} style={{backgroundColor: '#173E6B', borderRadius: 20}}>
      <span style={{color: 'white', fontWeight: "bold"}}><i className={props.icon}></i>{props.label}</span>
    </div>
  )
}

function Footer()
{
  return(
    <>
      <div style={{backgroundColor: '#001A3A'}}>
        <div className="container p-5">
          <div className="row text-white">
            <div className="col">
              <img src="https://asset.tix.id/wp-content/uploads/2021/10/TIXID_logo_inverse-300x82.png" style={{width:100}} />
              <p className="pt-3">Best App For Movie Lovers In Indonesia! Movie Entertainment Platform From Cinema To Online Movie Streaming Selections.</p>
            </div>
            <div className="col text-white">
              <a href="" style={{textDecoration: 'none', color: "white"}}>NOW SHOWING</a><br />
              <a href="" style={{textDecoration: 'none', color: "white"}}>TIX NOW</a><br />
              <a href="" style={{textDecoration: 'none', color: "white"}}>SPOTLIGHT</a><br />
              <a href="" style={{textDecoration: 'none', color: "white"}}>VIDEO TRAILERS</a>
            </div>
            <div className="col">
              <a href="" style={{textDecoration: 'none', color: "white"}}>CARRERS</a><br />
              <a href="" style={{textDecoration: 'none', color: "white"}}>CONTACT US</a><br />
              <a href="" style={{textDecoration: 'none', color: "white"}}>PRIVACY POLICY</a><br />
              <a href="" style={{textDecoration: 'none', color: "white"}}>TERMS & CONDITIONS</a>
            </div>
            <div className="col text-white">
              <p className="mb-1">TIX ID SUPPORT</p>
              <p>E-MAIL : HELP@TIX.ID</p>
              <p>FOLLOW US</p>
              <a className="nav-item text-white" href=""><i className="bi bi-instagram"></i></a>
              <a className="nav-item text-white ms-4" href=""><i className="bi bi-youtube"></i></a>
              <a className="nav-item text-white ms-4" href=""><i className="bi bi-facebook"></i></a>
              <a className="nav-item text-white ms-4" href=""><i className="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white p-1" style={{backgroundColor: '#192C4F'}}>
        <p className="mt-3">2022 TIX ID - PT NUSANTARA ELANG SEJAHTERA. ALL RIGHTS RESERVED.</p>
      </div>  
    </>
  )
}

export default App