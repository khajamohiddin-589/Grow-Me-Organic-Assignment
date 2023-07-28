import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    email: '',
    phoneNo: '',
    showSubmitError: true,
    errorMsg: 'You Need to Enter Details First',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePhoneNo = event => {
    this.setState({phoneNo: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    const {username, email, phoneNo} = this.state
    const userDetails = {username, email, phoneNo}
    localStorage.setItem('token', userDetails)

    history.replace('/page-two')
  }

  onSubmitFailure = () => {
    this.setState({showSubmitError: true, errorMsg: 'Fill All the Details'})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, email, phoneNo} = this.state
    if (username !== '' && email !== '' && phoneNo !== '') {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  renderEmailField = () => {
    const {email} = this.state
    return (
      <>
        <TextField
          type="email"
          id="email"
          value={email}
          onChange={this.onChangeEmail}
          label="EMAIL"
          margin="normal"
          size="small"
          fullWidth
          variant="standard"
          color="warning"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <TextField
          type="text"
          id="text"
          value={username}
          onChange={this.onChangeUsername}
          label="NAME"
          margin="normal"
          size="small"
          fullWidth
          variant="standard"
          color="warning"
        />
      </>
    )
  }

  renderPhoneNoField = () => {
    const {phoneNo} = this.state
    return (
      <>
        <TextField
          value={phoneNo}
          onChange={this.onChangePhoneNo}
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]',
          }}
          type="text"
          fullWidth
          id="phoneNo"
          margin="normal"
          label="PHONENO"
          size="small"
          variant="standard"
          color="warning"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg, username, email, phoneNo} = this.state
    console.log(username, email, phoneNo)
    const jwtToken = localStorage.getItem('token')
    console.log(jwtToken)
    if (jwtToken !== null) {
      return <Redirect to="/page-two" />
    }
    return (
      <div className="login-form-container">
        <img
          src="data:image/png;base64,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"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAB4CAMAAADrAVSlAAABF1BMVEX////oRyvrYi7cNxrxhTHJNBb/+vnznY786ufoSS33wLf2t6386OTwhXPxjHrsaVLrW0Ltb1n0o5XpUDX5y8T+9fT1r6L97+z0qp360crvfGnwinjrXUTpUTbvgm/74Nz61tDudWD3vLLxkoLymYnsZk761M3sa1X1raH629bsajzQSC3MPSDxjFX4zMThVTzdTDHUUjjqXTvpVS3vhGH97N/xiT/udUP2sn31qGz3v6r73sbxkW39693mlITno5bWY0zRSzHdhHLgdWHcXEPodVXbVC7tkXjqY0L0qIvpbUvznHr50MDueT/wiFvwhkjyj0H607Xzl1DudTn4yKTud0v4v5P1q3L3v5/1spnwjWf2w6/5w5nR7OlEAAASHklEQVR4nO1ca4PSSNZO0XSFSgKEXEgICUkIgYZmAXu0tad1Zvt9dbd1dNRx1HX1//+OPVW5c+nGddt2tJ4PCiSpnDpPnWuVCgIHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwfHXxyN4fS2ReAowfpl2Rzj25aCIwP+dXWghvJti8GRwvz1zsHBCrnSbQvCwYApHwc6Qu3xbYvCQfHrnRUQQghCDo/stw8sXcwPKFSESNO/bXE4pnfmhBGyRMBI37xteX54/HK4YnwcIN1TPSJyRm4XVuqwIM1aLperA2LctkQ/OH6dJ4Ss5o+P5/PDFQp5fXir+DvjAx0eHz8+BFzMV7wa+e9hWtYXrmflGNGUdzWfr+5QQg7nqytMBFsNP5j6ype+9So0Go1dYQzDtf0Hwg3FD/zGTcq6ATmKgi8b4f/AQNCc+ip1zvg4RGRnWJ9qUavpDJqtyL65gqXVatk7Lhlwbd9h8IIJC7JqX7FJ10ToyxpQyvHBwSHQcTj3VpQOFlB2+Kzp0QBqxwT6oBt80Yt3A0ZXla1XTAeu7TcI0BFmspJQ6/0P5bsSX0yIPIdoTi1jSVaUD+q/DibbVpQ5dDxE1I4zGHRcDyHPkW5m4VEdiluHlvV9CTHtkICw7XAQTlSC9LBr/U9l3IkvJQT//2qeeCoPHR9S81gBL8stjhrbMUKxJhvBdGrIdot2vm6mO0wJUbctaStGexKijGDFhCBsb9ozuiI8p46+DiNDUfwiZ744Pk4jOSJ3Llbw92PgZbnZY8RHHtKbw2zhYkWbAD83UrIwNzPY/B3bZE9ClIggtdXLhDWlJti2+FUYwfjL3MYvzDwg2SXEPYYy5DFNtS7IcONGSUVkVO5zYQN8dOcmqnpQuoe8Ta4DFe3nsvAI+OiWrdzXYDlpf4X6ykkNBDTweA72oerzw+Ml0tbvCybAx5ojGwNHN5FrgdLBFjobbrOP0H5BnRrzUVX7pu0h9S9QX+HJkhGyIoSAq1oRBN+XCPXXb2yBS94w+W7c2uwNl2zGUqbKf+EnQOlmB6GjtZ8ND7nGBiFmw/eVqp36wMdGUoBbW+25+IUWLTsqFkvxlcYO88Jw8crSyGwoys66anO4tk5N5NjT0QFUhuARlofH8Odk7b4peItNH4KlLDs1NI1+xEFXy4wLT4+i1gAKll4mjaVpeRagaDaboWVr+bjwLKOPKl0iKK6mvlYHka5SJQQrw1Gr2WyNhkpJX9q2xSP4LiJyLq3PJJS1UTa6Ibb6zUiUqLCmXQgqmD0b5tFvicPSmL6mURawJYlRv9nSgvyKpGklr4F9edTq96ORrOznL3GMlnOa8qIDcryiIXM1p034eO02WF7Nq0aE6wsQ03ZU5Ca/TDVIkpMiIJklTBouZuT4KmEOxCB5LxMuq2ytUaXjAUKjyiu6BLXNKiFKt+UmlYbb7+b0KTHaEgMFwaYDZNJKVNqBmo6GjdEkGSgWQRzFQ+1MKFkM9fTSqEjzJYQg7zHlKE7mWFQAlbTXP2qqycNq396rxYBh2Rwf3vEgU19e0heT+cUSEt9V9ekGRIsrSytGSI/mMl7IxpUcHZE4dMI2/DY5ShShkVxT2EET+uMAdbKpgFH02Wem9DH4/HKAAjXrslAhZNwCCsP+aNRyVKL2g/RnGWWKrwImoQeZtJIw7dNaii0f3J2AAkBap+3pnaFZELKIVN0No5E26nd0EueqZoRMRZeok7ATg+LiLC8tE8IU4sKwHVg33l4tFVOlNvF4SYi6vDyBrJIcLx8fg81UH+5B1nKlG6SETEMCJfERW/gyzYltqReMjS5UaGqyxwIqiTO7hykFzN3nocLJ9MWUjkeQ+paMUoSvZoWQAN43kMeKaTYCeUCQk+oEbGsjJ6GgRmdn0kqKQ0hHO6LKw5qaShtIIG3cLQiJiBfJYwgBpmJA6uZm1kwJmQ7oRWOxkES9kLVECE1DVXG4CAJjGAE1zh42YsIqWd7xwAC8g9rsREfehf7kHxuE2OCVrxwHpjiExS4ukq9jMDwnM4ZxpCO9y+SFPCmbktlGInX3XpYWBDpykk+J0hsxc4Mppi7SwUZLhPhAYJTnFD5UHg7zWrjyXBlDCOuZtHKEJiMjUSJkC2SQZWDjyHO7OSGyU3gaC+YxSdcTELJooo6d+EkTuCJBcqUgZAqL0pHTdWxpoJLo+gzH1Im+eowoHwcnwIgXe+hyBoxUp7Rr0eWAKQ5IZ5G+veFUTks0YAW5zOMt9CJ/s5Fr4UkRKBLHTpEqHXy+k5mlOYCsG1cIiSCslcJ+o0XYHWyNbe+EWShtm9KIqE+kTFewkMNCWsv2YpIRYpa9ZqOdrycgpK93jMyCaQshVVBOCIbVNym6muZQdcPrzyuYNKbfQUgnBweXtVrtpAOuv1b7x7zaFOkUK3s7YIp6OyexW/KpTN5+WnnjEKmZUD5Ibui5gUA0U9MFlCq9ESKSdX1BATFdqgUhvlqNMYLSQV5ApwSOd0f+kVFFpc29D405bnn9UWeZB/UKIH2LcnmIW1IJONRm8iknxNDXiltZNq63EH8FWe8x0nW6YwiEUCNBJ8BIt3Kbyhx+GYqfInkHnWJeduFO5qwzgDtKNA+BW8x+HKAwRE6mO5nk2s+UDje7icOARUxYrMkJgbyPrBktKFYUBGEtMy7DTacB0pJCwHA9n4P8YTsh48znMULKr5dyn54TAh/23inIgP3RBW28I4/t4c4SRnRvVpv983k5iKssyyvBjJopEhpgirlqhSlZb5/TeMqIoJlvtkx8Ty+yLjPOlF8QYjqJn2Ipb1JZ5NpueGmOXADGbgv7EjLJFyu4uPV+g72DEBOCdPIJCPDKr+/lT2SEgMWjz+35m92mrq8uaN+kIKRWe3ZyCa7r7tOSlJ3cv6ew1GyvIVnwrXKQ0TYr/QVJSxCtVCPA0owz2o3Seso1GqjIowuBuujk/bm2x+Dm1x3TAOmNxGXtyAhLLiu3U/rmeG2kXpUQazoej1mlDnaR/CTltpJgmpduGSE+OIXPa/ThhabSPHd5cZGeArpMCLk7u5ydqLXaw4/5Mu+XZ0BhjiKGEiGFkwvX6YM5eUxZjMnQLO7LCemzJCpBscTBm0NpgsFDp+E9JwQ00jbWkORwu4N6oxTUC2lHeWDIUSbEl+zICcOwJR4Nx7lk8Hqn/ISS205GiLTDynZC0Qaqenly8tNPl8v0UNYJ4+Py7pvZsxUBc3n72/N06YB77lRXkdVg2EoIGOt6zxF40JX0TpJGUOayUuamXsnllVLbGHlSuUbMCYG8weuswWW62J32yllLqCLtYHNHqSDEHA5iT3U7Tthx3TjcSUhjg5DulobgVbCenswYIGqwY4u6nhAyO7n7oga15zP65ffz5O4p2N/WDGFfQkwoI/xssumCjFAnD+qjslGVgkBXR53GoLDPMiFE3QTVxc7C0MkuVKR1Nu05JwRD9RCPukNj2jOGXXHweYR8VkzvvnxRS8HOWV+C+/KYgZDfX9aWOlIZO2f32N3gxMnW3vVWQuL1FCBxWYmFQOabRG9Fp2lvkgWbRc4rVAih6dVIL/qMZZflypugo1FD2Oa9FSh/x5vSRpv85YTIYLh5TxGb088gxFiLMtfAb9dP3yR8nNCM9+TlfVhyNKqfoL+d1lZ68uXt6bvkftpA3TbJrYQ017NelnhlIQ6SWaYAmRaGneSzQcrN9nKaBNk8yJKPnRPS2xLUUzTcnc3FOG8uFtIONzWXEQIjuUF1unsT4pPPCepmS63XT++nBqL/NJudnp4g6qZmOvpb/e0Koj0l5Mnpq9fsAZrnbNlA3x5DQNr1UxJaMQEYima+YCkiK9dpYhQWbWChSgidIArzDDMnBOzL29Uagpd1Nh1sULTfK9I2gPC1JMBICTHycm9dsusJMTdrtysg6Zf1ev0l1flPyIPY8aJev08oIZcICHlJm9o0orin9T+SqR2RavHNYI22EgIRnFTDKl20ucvT2OcFod0fcCMyW+7lRKdCyLiym1sUhp3dpzvozsfGiXETcrDsAGBFWprTV8tg6sUYIfKaqePPIIRGrGpmehUcNKtTRsBDLX+itLyEb5DLUAMBQk69hJAZOa3XkyjSoPMJqqNYkbeVEFYmVhRilxJc2vOFUN5PfGBEJxZlzj1BhRBst0p74UXVB14urraGpCB9BQbXr9trW7hiidiqtEeg/oqJQPmTE1IJL58TQ1ifoVIZLmR/55ZSMyHk9MXsn/LvwMd9+u0N0WdgIAisYkTPzSSE/JEO4tPeZeUg1mJEzxxsI2QMSa5W2hyV3HKrgma+QUPVmREFujdW3EqjvUqIYJb3P0tlOKzAqMy60XZyI9w45DDV9NIhh6q0DZhZq3SzT08DZi6rrHbaktufEHqozyktGStUmztPIEjkTZ2ZyAdFeF5jHgtwos+oadTrf1rSQNVntRMCn/MJg9xtbZrqwPTlju6J2wnBNnj4vG9tDSFHG5RmDB5qZJMkzJgd1AQfVunCXXGQoUTIAmoULR8V9ya0ZMlua0FIjRbpVawYA7CP4mBWVVpB8hCJpjgbqO8NUkIUeGqRLxV/5KlZ33IPQtgeRDPIhp1CsqgGO+elUx/18s1DuB2/rdVOGSEvyDPaDGFhYyqHzyAFrr8qFqHh0AOkI7nn+z1ZbLrI61rbCWEbBGpLphrAEt3mDMtrg8ZwN/POEvIqOa+wLyHCENTVSplUNMiPS0ap0D2jTmQbgTI2tFYbyki7eMe6tDbdEGGHlfEUBoqyKhuLBHXSo2hWt0laeRG5DyF4CKHY0SjT2LdBeV53p8vC4cvTN2/uz57TL08TjwUe7ORJDUwkNYqFWHNJ/az01DSiwd4NB82Q/mtEx96R9lLxI7hDjWzbFtuUxmqMh1w2bz/Swnqtb7snIbgLlfPElodD+ailI7dyNNHUHHA8esdphW344A3skntblxZrMRVSs21tQNTIz+sQCwaJNfaGSIULdtb32ocQiEEhVRMdtkl3ea86F2awuvA3doc/e5kQUn/xpP7mRE/zKmE60/X6u/JT1rAZpycX1I5IrXEXIYIlO1BqEh0E8Sba2saM2S71jyBJdatJ6p6EgHdpuTpR3Vj1iOoMq4PgQOyoydFw3U3WaY4NaU3JcZm0ukoPARetk6ClEqLGruqpodyge4tJcbEfIbgXxTodlh4zbkpXlSUmDeWz1I88rWd4AqF9lkUN6y66rD+qPudLthj1+yNNTnYHRTHxGZIoBmuvGHe1sONOwujI2FgZ5QOwviiu5a+iuDNfNKvXGkO7H8ZuZ6DJ66+HexeyJvb7LREuVnUB0q6n8IGs9Z2wr8n0/GmvOAelyCMnjsMmXBDobmIUsclMRbFSe4Jc9ubU6BKmAqqdgShfs1v4MDcQQXj06d27Bw8evD87e3j2/sG/8uO7TfTsjw1dYmz5vpnfk55kxVuOtGIcLGRjvO3wWeXujUevOh67fg0rPUle7MonMfb9xjbJtrwBK0HPz0N2cbTYDCSp52cZtZUlCutyZN93CHht0f4z5LopZ+ZYsCzr3r1H569fnz+y7p1n99jk2btdz3/XEK87QnADUGa1p+nHDx+E5x8tSIdGEbiD1w/yOO67T853PP5dYb0Fg9vXnEK7Efz7bWIg+OP9j8Lzf//2s2mMwqUivKvXc/MS736lf+Vyq1hEw6qXkUipr/DV8PHn5O/nb2uKgH+e3VcEyxgFwvmrIpD7T3c9/T1hROJKAjSeVPoKXwtWIgP+vXYf1of5ofacrhXRBxN5nd/0Q/y/J0aMSom5OYTiYbDXOdwbAX5Ye0j/th6CxfT1pi/ce/WDRXIsx8hrdo3A9/2xJMZID4NbFGf69oOA751b04+CGbNi4s+z6575zmBKAx3KV2fQbIYxId7odv/TsI9T/OnB+3sCxJAjU7Be38Pvf4RQXsFUi2J2sIm4YfS1/r3uLmD86FX9E615LJDEOvsknP8QyW4FuCF1tVE00uTxN7Aaz+tnIMX5gz9p9vf+TMCPrn3ku4RpfSP/MdWnOjWJ8wcsuzqHCPJX+Neq3zPOztgx/mSvFv9gOdY3CPxHJWb8oP7qG8KjB5Wv3F/dNs65TXxb+EZSCw4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg6O28F/AHKBhbUGdSkyAAAAAElFTkSuQmCC"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <>{this.renderUsernameField()}</>
          <>{this.renderPhoneNoField()}</>
          <>{this.renderEmailField()}</>
          <div className="button-container">
            <Button
              variant="contained"
              type="submit"
              margin="dense"
              className="login-button"
            >
              Login
            </Button>
          </div>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
