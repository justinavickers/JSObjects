const campaign = {

  ElizabethSanger: [
    {
      Introduction: {
        fullName: "Elizabeth Sanger",
        district:"5th Congressional district of Tennessee",
        age:"40"
      },
    },
    {
      Platform: {
        taxes: "cut sales tax",
        jobs: "higher minimum wage to a livable wage",
        infrastructure: "transit system",
        healthcare: "its a lost cause",
        crimeEnforcement: "regulate policies"
      }
     },

     {
      Donate: {
        donate_form: "https://snowballfundraising.com/online-donation-forms/",
       }
     },

     {
       CalendarOfEvents: {
        localFundraiser: "10-30-19"
       }
      },

      {
       VolunteerInformation: {
        name: "JaneDoe",
        address: "123 Five Street Four TN,11111",
        email: "asdf@jkl.com",
        phone_number:"000-000-0000",
        availability: "full"
        }
      },
      
    { imageGallery: {
      image1: "http://www.iou.edu.so/uploads/8/2/7/5/8275748/2178438_orig.jpg",
      image2: "https://study.com/cimages/videopreview/political-change-definition-and-explanation_107685.jpg"
    }
    },

    {
      missionStatement: {
        mission: "Make Tennesee a better place for EVERYONE!"
      }
    },

    {
      Vote:{
        register: "https://www.usa.gov/register-to-vote"
      }
    },
  ],
 
}


function addToImageGallery () {
  campaign.ElizabethSanger[5].imageGallery.image1 = "https://vignette.wikia.nocookie.net/spongebob/images/9/98/6a00d834518cc969e200e54f054d488833-800wi.jpg/revision/latest?cb=20141024034409"
  console.log(campaign.ElizabethSanger[5].imageGallery)
}

addToImageGallery()


 console.log(campaign.ElizabethSanger[1].Platform.infrastructure)

 function changeIndroduction () {
   campaign.ElizabethSanger[0].age = "30"
   console.log(campaign.ElizabethSanger[0].age)
 }

 changeIndroduction ()
 