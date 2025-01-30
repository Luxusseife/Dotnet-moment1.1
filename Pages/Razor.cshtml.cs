using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Moment1._1.Pages;

public class RazorModel : PageModel
{
    private readonly ILogger<RazorModel> _logger;

    public RazorModel(ILogger<RazorModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
    }
}

