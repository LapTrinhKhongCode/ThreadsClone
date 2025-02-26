using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace ThreadsClone.backend.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; }

    }
}
