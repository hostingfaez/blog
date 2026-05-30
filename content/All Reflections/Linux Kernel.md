---
{}
---
One major consideration is the trade-off between the desire to present the user with as many options as possible and the time you have to write the driver, as well as the need to keep things simple so that errors don’t creep in.

So your first order of business is to come up with a kernel source tree
(either from the [kernel.org](http://kernel.org/) network or your distributor’s kernel source package), build a new kernel, and install it on your system.

> [!note] 📌
> 
> > ***Note : ***
> > Faults in kernel code can bring about the demise of a user process or, occasionally, the entire system. They do
> > not normally create more serious problems, such as disk corruption.
> > Nonetheless, it is advisable to do your kernel experimentation on a system that does not contain data that you cannot afford to lose, and that does not perform essential services.

