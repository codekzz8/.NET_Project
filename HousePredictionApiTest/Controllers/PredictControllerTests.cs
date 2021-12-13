using HousePredictionApi.Controllers;
using HousePredictionApiML.Model;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HousePredictionApiTest.Controllers
{
    [TestFixture]
    public class PredictControllerTest
    {
        [Test]
        public void PredictDoesReturnPrediction()
        {
            //Arrange
            PredictController controller = new PredictController();

            ModelInput sampleData = new ModelInput()
            {
                Id = 7.1293E+09F,
                Date = @"20141013T000000",
                Bedrooms = 3F,
                Bathrooms = 1F,
                Sqft_living = 1180F,
                Sqft_lot = 5650F,
                Floors = 1F,
                Waterfront = 0F,
                View = 0F,
                Condition = 3F,
                Grade = 7F,
                Sqft_above = 1180F,
                Sqft_basement = 0F,
                Yr_built = 1955F,
                Yr_renovated = 0F,
                Zipcode = 98178F,
                Lat = 47.5112F,
                Long = -122.257F,
                Sqft_living15 = 1340F,
                Sqft_lot15 = 5650F,
            };
            // Act
            ModelOutput output = controller.GetPrediction(sampleData);

            // Assert
            Assert.IsNotNull(output);
        }
    }
}
