import React from 'react'

function EditModel() {
  return (
    <div>
 
    <Sidebar></Sidebar>
    <div className="full_container" dir="rtl">
      <ToastContainer/>
      <div className="inner_container">
      <Topbar />
        <div id="content">
        <ModelContext.Provider value={{ setOpen , viewModel} } >
          {open && <Showmodel/>}
          </ModelContext.Provider>
          <form
            className="row"
            style={{
              marginTop: 100,
              width: "80%",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
                           <h1 style={{
                            marginBottom :40,
                            color : "#FF5723",
                            fontWeight : "bold"
                           }}>اضافة نموذج جديد </h1>

            <div className="col">
              <label htmlFor="customerName"> نوع النشاط</label>
              <input
                type="text"
                id="customerName"
                onChange={ e => setActiviy(e.target.value)}
                className="form-control"
                placeholder="نوع النشاط"
                aria-label="First name"
                required
              />
              <label htmlFor="customerName"> رقم الهاتف</label>
              <input
                type="number"
                id="customerName"
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                placeholder="رقم الهاتف"
                value={phone}
                aria-label="First name"
                required
              />
              <label htmlFor="customerName"> اسم المندوب</label>
              <input
                type="text"
                onChange={(e) => setDelvname(e.target.value)}
                id="customerName"
                className="form-control"
                placeholder="اسم المندوب"
                required
                aria-label="First name"
              />
            </div>
            {/* onChange={(e) => setCustomername(e.target.value)}  */}
            <div className="col">
              <label htmlFor="customerName"> اسم الزبون</label>
              <input type="text" name="city" className="form-control" 
                onChange={ handeldata }
               id="customerName" placeholder="اسم الزبون"  
              list="custoname"  required />


                <datalist name="datalist"  id="custoname"  >
                { alldata.map( (val , keys) => {
                    return(
                       <option key={keys}  value={val.name}   />
                       
                       )
                    
                  }) }
                </datalist>



              <label htmlFor="customerName"> قوة المولد</label>
              <input
                type="number"
                id="customerName"
                onChange={(e) => setGeneretor(e.target.value)}
                required
                className="form-control"
                placeholder="قوة المولد"
                aria-label="First name"
              />
                <label htmlFor="customerName"> تاريخ الزيارة </label>
              <input
                type="date"
                id="customerName"
                onChange={(e) => setDatevist(e.target.value)}
                required
                className="form-control"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <label htmlFor="customerName"> المدينة </label>
              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                required
                id="customerName"
                className="form-control"
                placeholder="المدينة"
                aria-label="First name"
              />
              <label htmlFor="customerName"> احداثيات الموقع </label>
              <input
                type="text"
                id="customerName"
                onChange={(e) => setPosition(e.target.value)}
                required
                className="form-control"
                placeholder="احداثيات الموقع"
                aria-label="First name"
              />
            </div>
            <p style={{ textAlign: "center" }}>
              _________________________________________________________________________________________________
            </p>
            <div className="row">
              <div className="col">
                <div className="container ">
                  <p>الية استعمال الوقود </p>
                  {allfueldat[0]?.map(index => {
                    if(index.success === 0)
                    {
                      return (
                      <h6  style={{
                        color:'red',
                      }} > 
                        {index.msg}
                      </h6>)
                    }
                    else
                    {
                    return (
                      <div className="form-check">
                      <label
                        className="form-check-label pl-3"
                        htmlFor="flexCheckDefault"
                      >
                        {index.name_usage_state}
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={ e => handelUsingstate(e) }
                        value={index.id_usage_state}
                        id="flexCheckDefault"
                      />
                    </div>
                    );
                   }
                  })}

                </div>
              </div>
              <div className="col">
                <div className="container ">
                  <p>نوع الوقود </p>

                    {allfueldat[1]?.map(index => {
                      return(

                  <div className="form-check ">
                  <label
                    className="form-check-label pl-3"
                    htmlFor="flexCheckChecked"
                  >
                        {index.name_fuel_kind}
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={e => handelGasgTypestate(e)}
                    value={ index.id_fuel_kind}
                    id="flexCheckChecked"
                  />
                </div>
                      )
                    })}
                </div>
              </div>
              <div className="col">
                <div className="container ">
                  <p>نوع خزان الوقود </p>
                  {allfueldat[2]?.map(index => {
                      return(

                  <div className="form-check ">
                  <label
                    className="form-check-label pl-3"
                    htmlFor="flexCheckChecked"
                  >
                        {index.name_tank_kind}
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={e => handelTankTypestate(e)}
                    value={ index.id_tank_kind}
                    id="flexCheckChecked"
                  />
                </div>
                      )
                    })}
                
                </div>
              </div>
            </div>
            <p style={{ textAlign: "center" }}>
              _________________________________________________________________________________________________
            </p>
            <div className="row">                
                  <p> سعة الخزان</p>
                    <div className="col" >
                      <input type='number' className="form-control" onChange={(e) => setTanksize( e.target.value)} placeholder="ادخل سعة الخزان"  />
                    </div>

                    <div className="col" >
                    <div className="form-check">
                    <label
                      className="form-check-label pl-3"
                      id="lup"
                      htmlFor="flexChec"
                    >
                      فوق الارض
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={ e => handleTankPosationUP(e)}
                      value="up"
                      id="flexChec"
                    />
                    </div>
                    </div>
                    <div className="col" >
                    <div className="form-check">
                    <label
                      className="form-check-label pl-3"
                      htmlFor="flexCheckk"
                      id="ldown"
                    >
                      تحت الارض
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="down"
                      onChange={ e => handleTankPosationDown(e)}
                      id="flexCheckk"
                    />
                    </div>
                    </div>
            
                  </div>
                  <div className="row" style={{
                    marginTop:20
                  }}>
                <div className="col" >
                  <input style={{width:300}}  onChange={(e) => setCountcy(e.target.value)}  type='number' className="form-control" placeholder="عدد اسطوانات الإطفاء"  />
                </div>

                <div className="col" >
                <input style={{width:300}}  onChange={(e) => setSpace(e.target.value)}type='number'className="form-control" placeholder="بعد الخزان عن المولد"  />
                </div>
              </div>
              <div className="row" style={{
                    marginTop:20
                  }}>
                    <div className="col">
                    <label
                      className="form-check-label pl-3"
                      htmlFor="flexCheckDefault"
                    >
                      
                      ملاحظات
                      </label>
                    <textarea style={{width:300}} type="text" id="flexCheckDefault" onChange={ (e) => setNotes(e.target.value) } className="form-control" placeholder="ملاحظات"  />
                    </div>
              </div>

              <div className="row" style={{marginTop:20}}>
                <input type="file" className="input-group"  name="file" onChange={e => changeHandler(e)} />
     
        <div></div>
              </div>
            <button
              className="btn btn-danger"
              onClick={ addnewModel}
              style={{ marginTop: 50 }}
            >
                تعديل
                            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EditModel