using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SneakyTowerDefense.Mvc.Web.Controllers
{
    public class GameController : Controller
    {
        //
        // GET: /Game/

        public ActionResult Index()
        {
            ViewBag.Message = "HTML5 + JS Tower Defence Game, powered by Windows Azure.";

            return View();
        }

    }
}
