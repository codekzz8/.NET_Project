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

        [Test]
        public void PredictDoesReturnPrediction1()
        {
            //Arrange
            PredictController controller = new PredictController();

            ModelInput sampleData = new ModelInput()
            {
                Id = 7.1293E+09F,
                Date = @"20141013T000000",
                Bedrooms = 1F,
                Bathrooms = 3F,
                Sqft_living = 1480F,
                Sqft_lot = 7650F,
                Floors = 1F,
                Waterfront = 0F,
                View = 0F,
                Condition = 3F,
                Grade = 7F,
                Sqft_above = 1180F,
                Sqft_basement = 0F,
                Yr_built = 1975F,
                Yr_renovated = 1990F,
                Zipcode = 98178F,
                Lat = 42.5112F,
                Long = -122.257F,
                Sqft_living15 = 1383F,
                Sqft_lot15 = 4284F,
            };
            // Act
            ModelOutput output = controller.GetPrediction(sampleData);

            // Assert
            Assert.IsNotNull(output);
        }

        [Test]
        public void PredictDoesReturnPrediction2()
        {
            //Arrange
            PredictController controller = new PredictController();

            ModelInput sampleData = new ModelInput()
            {
                Id = 7.1293E+09F,
                Date = @"20141013T000000",
                Bedrooms = 1F,
                Bathrooms = 3F,
                Sqft_living = 4430F,
                Sqft_lot = 7650F,
                Floors = 3F,
                Waterfront = 1F,
                View = 0F,
                Condition = 3F,
                Grade = 7F,
                Sqft_above = 1180F,
                Sqft_basement = 0F,
                Yr_built = 1965F,
                Yr_renovated = 1989F,
                Zipcode = 98178F,
                Lat = 42.5112F,
                Long = -122.257F,
                Sqft_living15 = 1383F,
                Sqft_lot15 = 3284F,
            };
            // Act
            ModelOutput output = controller.GetPrediction(sampleData);

            // Assert
            Assert.IsNotNull(output);
        }

        [Test]
        public void PredictDoesReturnPrediction3()
        {
            //Arrange
            PredictController controller = new PredictController();

            ModelInput sampleData = new ModelInput()
            {
                Id = 7.1293E+09F,
                Date = @"20141013T000000",
                Bedrooms = 2F,
                Bathrooms = 2F,
                Sqft_living = 1384F,
                Sqft_lot = 5650F,
                Floors = 2F,
                Waterfront = 1F,
                View = 1F,
                Condition = 4F,
                Grade = 6F,
                Sqft_above = 1380F,
                Sqft_basement = 1245F,
                Yr_built = 1975F,
                Yr_renovated = 1990F,
                Zipcode = 78178F,
                Lat = 42.5112F,
                Long = -122.257F,
                Sqft_living15 = 1383F,
                Sqft_lot15 = 4284F,
            };
            // Act
            ModelOutput output = controller.GetPrediction(sampleData);

            // Assert
            Assert.IsNotNull(output);
        }
    }
}
