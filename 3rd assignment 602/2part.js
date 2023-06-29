class Personnel {
    constructor(name, birthDate, gender, ethnicity, martialStatus, religion, employment, visaCode, citizenship ) {
        this.name = name, 
        this.birthDate = birthDate, 
        this.gender = gender, 
        this.ethnicity = ethnicity, 
        this.martialStatus = martialStatus,
        this.religion = religion, 
        this.employment = employment, 
        this.visaCode = visaCode,  
        this.citizenship = citizenship    
    }
    showInfo() {
        console.log("Here Basic Info")
    }
}
  
class ConsentToDisclosure extends Personnel {
    constructor(name, father, mother, siblings) {
        super(name)
        this.father = father
        this.mother = mother
        this.siblings = siblings
    }
    showInfo() {
        console.log("Here Basic Info")
    }
}



class DirectoryInformation extends Personnel {
    constructor(name) {
        super(name)
        }
        showInfo() {
            console.log("Here Basic Info")
        }
    }
  
class ExternalID extends Personnel {
    constructor(name, localAdress, collegeInfo, AcademicInfo, datesOfAttendance, degrees_honors_awards, commencementInfo, yearbookInfo) {
        super(name)
        this.localAdress = localAdress
        this.collegeInfo = collegeInfo
        this.AcademicInfo = AcademicInfo
        this.datesOfAttendance = datesOfAttendance
        this.degrees_honors_awards = degrees_honors_awards
        this.commencementInfo = commencementInfo
        this.yearbookInfo = yearbookInfo
        }
        showInfo() {
            console.log("Here Basic Info")
        }
}

class ShareLinkAccess extends Personnel {
    constructor(name, addID) {
        super(name)
        this.addID = addID
        }
        showInfo() {
            console.log("Here Basic Info")
        }
}

class ComplianceStatus extends Personnel {
    constructor(name, massMotorLaw, BUAlertPhone, gradTraining, localAdress, medStatus, studAccountStatus, alcoholTraining) {
        super(name)
        this.birthDate.massMotorLaw = massMotorLaw
        this.BUAlertPhone = BUAlertPhone
        this.gradTraining = gradTraining
        this.localAdress = localAdress
        this.medStatus = medStatus
        this.studAccountStatus = studAccountStatus
        this.alcoholTraining = alcoholTraining
        }
        showInfo() {
            console.log("Here Basic Info")
        }
}

class AddressandPhone extends Personnel {
    constructor(name, cellPhone, local, home, eAdress) {
        super(name)
        this.cellPhone = cellPhone
        this.local = local
        this.home = home
        this.eAdress = eAdress
        }
        showInfo() {
            console.log("Here Basic Info")
        }
}

class Identification_YourName extends Personnel {constructor(name) {super(name)}}


class TransportationManagementPortal_MBTAandParking extends Personnel {
    constructor(name, viewManageAccount, payCitation, appealCitation) {
        super(name)
        this.viewManageAccount = viewManageAccount
        this.payCitation = payCitation
        this.appealCitation = appealCitation
        }
        showInfo() {
            console.log("Here Basic Info")
        }
}



class InternationalVerification extends Personnel {
    constructor(name, ISSOCheckin, SubmitDoc) {
        super(name)
        this.ISSOCheckin = ISSOCheckin
        this.SubmitDoc = SubmitDoc
        }
        showInfo() {
            console.log("Here Basic Info")
        }
}

class ProofOfEnrollment extends Personnel {
    constructor(name, proofOfEnrollment, enrollmentHistory, loanInfo) {
        super(name)
        this.proofOfEnrollment = proofOfEnrollment
        this.enrollmentHistory = enrollmentHistory
        this.loanInfo = loanInfo 
        }
        showInfo() {
            console.log("Here Basic Info")
        }
}

class FitRecMembership extends Personnel {
    constructor(name, program, instruction, info, balance) {
        super(name)
        this.program = program
        this.instruction = instruction
        this.info = info
        this.balance = balance
        }
        showInfo() {
            console.log("Here Basic Info")
        }
    }

class FitRecUsageAgreement extends Personnel {
    constructor(name) {
        super(name)
    }
    showInfo() {
        console.log("Here Basic Info")
    }
}

class MassMotorVehicleLawAcknowledgement extends Personnel {
    constructor(name, sign) {
        super(name)
        this.sign = sign
    }
    showInfo() {
        console.log("Here Basic Info")
    }
}

class CheckYourEmail extends Personnel {
    constructor(name, mail) {
        super(name)
        this.mail = mail
    }
    showInfo() {
        console.log("Here Basic Info")
    }
}

  