import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'

const registrationList = []

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo (Kinshasa)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czechia',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Holy See',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Ivory Coast',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine State',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States of America',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
]
class MyForm extends Component {
  state = {
    prevRegistrationList: registrationList,
    fullName: '',
    mailId: '',
    mobileNo: '',
    birthDate: '',
    gender: '',
    address: '',
    country: '',
    pinCode: '',
  }

  onSubmitRegistration = event => {
    event.preventDefault()

    const {
      fullName,
      mailId,
      mobileNo,
      birthDate,
      gender,
      address,
      country,
      pinCode,
    } = this.state

    const newRegistration = {
      id: uuidv4(),
      fullName,
      mailId,
      mobileNo,
      birthDate,
      gender,
      address,
      country,
      pinCode,
    }
    console.log(newRegistration)

    this.setState(prevState => ({
      prevRegistrationList: [
        ...prevState.prevRegistrationList,
        newRegistration,
        (fullName: ''),
        (mailId: ''),
        (mobileNo: ''),
        (birthDate: ''),
        (gender: ''),
        (address: ''),
        (country: ''),
        (pinCode: ''),
      ],
    }))
  }

  onChangeName = event => {
    this.setState({fullName: event.target.value})
  }

  onChangeMailId = event => {
    this.setState({mailId: event.target.value})
  }

  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  onChangeBirthDate = event => {
    this.setState({birthDate: event.target.value})
  }

  onChangeGender = event => {
    this.setState({gender: event.target.value})
  }

  onChangeAddress = event => {
    this.setState({address: event.target.value})
  }

  handleChangeCountry = event => {
    this.setState({country: event.target.value})
  }

  onChangePinCode = event => {
    this.setState({pinCode: event.target.value})
  }

  render() {
    const {
      fullName,
      mailId,
      mobileNo,
      birthDate,
      gender,
      address,
      country,
      pinCode,
    } = this.state

    return (
      <div className="app-container">
        <div className="tagLine">
          <div className="vertical-line">.</div>
          <p className="text">
            Responsive
            <br />
            Registration
            <br />
            Form
          </p>
        </div>

        <div className="responsive-container">
          <h1 className="heading">Registration Form</h1>
          <form className="form-container" onSubmit={this.onSubmitRegistration}>
            <label className="label" htmlFor="fullName">
              Full Name
            </label>
            <br />
            <input
              id="fullName"
              value={fullName}
              onChange={this.onChangeName}
              className="input"
              placeholder="Enter full name"
            />
            <br />
            <label className="label" htmlFor="mailId">
              Email Address
            </label>
            <br />
            <input
              id="E-mailId"
              type="email"
              className="input"
              value={mailId}
              onChange={this.onChangeMailId}
              placeholder="Enter email address"
            />
            <div className="Mb-Con">
              <div className="m-con">
                <label className="label" htmlFor="mobileNo">
                  Mobile Number
                </label>
                <br />
                <input
                  id="mobileNo"
                  className="input"
                  value={mobileNo}
                  onChange={this.onChangeMobileNo}
                  placeholder="Enter mobile number"
                />
              </div>

              <div className="b-con">
                <label className="label" htmlFor="mobileNo">
                  Birth Date
                </label>
                <br />
                <input
                  type="date"
                  className="input"
                  value={birthDate}
                  onChange={this.onChangeBirthDate}
                  placeholder="mm-day-year"
                />
              </div>
            </div>

            <div className="gender-con">
              <p className="label genderTag">Gender</p>
              <div>
                <label className="label">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={this.onChangeGender}
                  />
                  Male
                </label>
                <label className="label">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={this.onChangeGender}
                  />
                  female
                </label>
                <label className="label">
                  <input
                    type="radio"
                    name="gender"
                    value="Prefer not to say"
                    onChange={this.onChangeGender}
                  />
                  Prefer not to say
                </label>
              </div>
            </div>

            <label className="label" htmlFor="address">
              Address
            </label>
            <br />
            <input
              id="address"
              className="input"
              value={address}
              onChange={this.onChangeAddress}
              placeholder="Enter address"
            />
            <br />
            <div className="C-E-con">
              <div className="c-con">
                <select className="input" onChange={this.handleChangeCountry}>
                  {countries.map(eachCountry => (
                    <option value={eachCountry}>{eachCountry}</option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  className="input"
                  value={pinCode}
                  onChange={this.onChangePinCode}
                  placeholder="Enter postal code"
                />
              </div>
            </div>

            <button type="submit" className="button">
              submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default MyForm
