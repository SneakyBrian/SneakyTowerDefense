using System.Web;
using System.Web.Optimization;

namespace SneakyTowerDefense.Mvc.Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));

            //add the game js as a bundle
            bundles.Add(new ScriptBundle("~/bundles/game").Include(
                "~/Scripts/Game/Support.js",
                "~/Scripts/Game/Session.js",
                "~/Scripts/Game/Tower.js",
                "~/Scripts/Game/Weapons/Weapon.js",
                "~/Scripts/Game/Weapons/Cannon.js",
                "~/Scripts/Game/Weapons/Ammo/Ammo.js",
                "~/Scripts/Game/Weapons/Ammo/CannonAmmo.js",
                "~/Scripts/Game/Map/Map.js",
                "~/Scripts/Game/Map/Tile.js",
                "~/Scripts/Game/Enemies/Wave.js",
                "~/Scripts/Game/Enemies/Enemy.js",
                "~/Scripts/Game/Enemies/Bomber.js",
                "~/Scripts/Game/Enemies/Tank.js"
                ));
        }
    }
}