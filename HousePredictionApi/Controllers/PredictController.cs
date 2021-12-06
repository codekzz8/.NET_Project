using HousePredictionApiML.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace HousePredictionApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class PredictController : ControllerBase
    {
        [HttpPost]
        public ModelOutput GetPrediction([FromBody]ModelInput request)
        {
            return ConsumeModel.Predict(request);
        }
    }
}
