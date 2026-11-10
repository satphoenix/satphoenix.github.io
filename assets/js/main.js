/**
 * Phoenix Software Ecosystem - JavaScript Logic
 * Powered by jQuery 3.7+ & Bootstrap 5.3+
 */

$(document).ready(function () {
  "use strict";

  // Data Store for Phoenix Softwares
  const phoenixSoftwareData = {
    "phoenix-os": {
      id: "phoenix-os",
      name: "Phoenix OS",
      tagline: "Ultra-Lightweight, High-Performance Linux-Based Operating System",
      category: "Operating System",
      badgeClass: "badge-system",
      version: "v3.2.0 Dev / Enterprise",
      lastUpdated: "Latest Release",
      driveUrl: "https://drive.google.com/drive/folders/1waesyn9nZS0AyFMPHzUCFb3qRBaso_v_?usp=sharing",
      iconClass: "bi-cpu icon-os",
      size: "~2.4 GB ISO",
      architecture: "x86_64, ARM64",
      highlights: [
        "Custom tuned microkernel with optimized CPU scheduler",
        "Pre-loaded with developer SDKs, compilers & Docker runtime",
        "Hardware-accelerated compositor with ultra-low latency windowing",
        "Zero telemetry & built-in sandbox security profiles"
      ],
      description: "Phoenix OS is engineered from the ground up for developers, power users, and creators who demand absolute performance. Featuring a hyper-optimized kernel, seamless multi-monitor management, and native container integration, it provides an uncompromising operating environment that breathes new life into modern and legacy hardware alike."
    },
    "phoenix-terminal": {
      id: "phoenix-terminal",
      name: "Phoenix Terminal",
      tagline: "GPU-Accelerated Next-Gen Terminal Emulator & Workspace",
      category: "Developer Tools",
      badgeClass: "badge-devtools",
      version: "v2.8.4",
      lastUpdated: "Latest Release",
      driveUrl: "https://drive.google.com/drive/folders/1_H1iMFc97hphenlc8X2a07GslvnsyUY7?usp=sharing",
      iconClass: "bi-terminal icon-terminal",
      size: "~45 MB",
      architecture: "Cross-platform (Linux / Windows / macOS)",
      highlights: [
        "GPU-accelerated text rendering with zero input lag",
        "Integrated split-pane manager and tabs with drag-and-drop",
        "Native ligatures, Unicode symbols & TrueColor support",
        "Over 120 built-in themes plus custom CSS & Lua scripting"
      ],
      description: "Phoenix Terminal is a blistering-fast terminal emulator engineered with OpenGL and Metal acceleration. Say goodbye to sluggish rendering when piping massive log files. Enjoy seamless command palette navigation, built-in SSH profile management, multiplexed split panes, and integrated Git status indicators."
    },
    "phoenix-factory": {
      id: "phoenix-factory",
      name: "Phoenix Factory",
      tagline: "Rapid Multi-Platform Build Automation & Packaging Engine",
      category: "Automation & Build",
      badgeClass: "badge-devtools",
      version: "v1.9.1",
      lastUpdated: "Latest Release",
      driveUrl: "https://drive.google.com/drive/folders/1EphRd2fpD8gFUcMb9mlJdZZoAifRJi2g?usp=sharing",
      iconClass: "bi-gear-wide-connected icon-factory",
      size: "~78 MB",
      architecture: "Linux / Windows / macOS",
      highlights: [
        "Distributed multi-target cross-compilation pipeline",
        "One-click standalone installer & container bundle builder",
        "Intelligent incremental caching system for instant builds",
        "Visual DAG build graph and interactive artifact inspector"
      ],
      description: "Phoenix Factory streamlines complex build and deployment pipelines. Whether targeting native binaries, container images, or platform installers (.deb, .rpm, .exe, .dmg), Factory provides a unified declarative workspace with lightning-fast caching and real-time failure diagnostics."
    },
    "phoenix-recorder": {
      id: "phoenix-recorder",
      name: "Phoenix Screen Recorder",
      tagline: "Pro 4K 120FPS Screen Capture & Audio Isolation Studio",
      category: "Media Utilities",
      badgeClass: "badge-media",
      version: "v4.1.0",
      lastUpdated: "Latest Release",
      driveUrl: "https://drive.google.com/drive/folders/1oP53sRZOgRozwC0ncJqr1Qv_fFCJgLlR?usp=drive_link",
      iconClass: "bi-camera-video icon-recorder",
      size: "~62 MB",
      architecture: "Windows / Linux",
      highlights: [
        "Up to 4K 120 FPS lossless capture with NVENC & QuickSync",
        "Multi-track audio routing with active noise cancellation",
        "On-screen interactive vector annotation pen & click ripples",
        "Instant MP4, MKV, WebM and GIF export without re-encoding"
      ],
      description: "Phoenix Screen Recorder gives educators, creators, and developers broadcast-quality screen capture with minimal CPU overhead. Isolate application audio, record multiple monitor zones simultaneously, highlight mouse events, and record crisp 4K tutorials in smooth 60 or 120 FPS."
    },
    "phoenix-torrent": {
      id: "phoenix-torrent",
      name: "Phoenix Torrent",
      tagline: "Ultra-Lightweight, Secure & Decentralized BitTorrent Client",
      category: "Networking & P2P",
      badgeClass: "badge-network",
      version: "v2.3.0",
      lastUpdated: "Latest Release",
      driveUrl: "https://drive.google.com/drive/folders/1sHnSU1yalwK4mClraGkxd9BZJMUrWK7w?usp=drive_link",
      iconClass: "bi-cloud-arrow-down icon-torrent",
      size: "~18 MB",
      architecture: "Cross-platform (Linux / Windows / macOS)",
      highlights: [
        "Minimal memory footprint (< 25 MB RAM idle)",
        "End-to-end peer encryption & proxy/SOCKS5/VPN binding",
        "Sequential downloading mode with instant video preview",
        "Zero ad trackers, zero analytics, pure open decentralized P2P"
      ],
      description: "Phoenix Torrent redefines decentralized peer-to-peer downloading. Free from bloatware, advertisements, or background crypto miners, Phoenix Torrent provides raw speed, sequential streaming previews, granular bandwidth scheduler, and strict privacy protection."
    },
    "phoenix-api-tester": {
      id: "phoenix-api-tester",
      name: "Phoenix API Tester",
      tagline: "Comprehensive REST, GraphQL, WebSocket & gRPC Client",
      category: "Developer Tools",
      badgeClass: "badge-devtools",
      version: "v3.0.2",
      lastUpdated: "Latest Release",
      driveUrl: "https://drive.google.com/drive/folders/1XFWSGFDaAHmlYo1byC5EChuGaZzP6YZB?usp=sharing",
      iconClass: "bi-hdd-network icon-api",
      size: "~54 MB",
      architecture: "Cross-platform (Linux / Windows / macOS)",
      highlights: [
        "Multi-protocol support: REST, GraphQL, WebSocket, gRPC & SSE",
        "Automated chained test runs with JavaScript assertions",
        "Built-in offline mock server with dynamic response generators",
        "Code generator for cURL, Python, Node.js, Go, Rust & Java"
      ],
      description: "Phoenix API Tester is the modern developer's ultimate API Swiss Army knife. Test endpoints with sub-millisecond precision, inspect payloads with formatted JSON/XML syntax highlighters, automate regression suites, and simulate backend endpoints locally with mock servers."
    },
    "phoenix-screen-share": {
      id: "phoenix-screen-share",
      name: "Phoenix Screen Share",
      tagline: "Ultra-Low Latency 60FPS Peer-to-Peer Desktop & Screen Streaming",
      category: "Media & Streaming",
      badgeClass: "badge-media",
      version: "v2.1.0",
      lastUpdated: "Latest Release",
      driveUrl: "https://drive.google.com/drive/folders/1rcIX9JvYXeWBYOvRNVwVkmLpJys2mT4V?usp=sharing",
      iconClass: "bi-cast icon-screenshare",
      size: "~48 MB",
      architecture: "Cross-platform (Linux / Windows / macOS)",
      highlights: [
        "Real-time 60 FPS hardware-accelerated screen capture & encoding",
        "Direct peer-to-peer WebRTC streaming with sub-30ms local latency",
        "Multi-monitor selection, window clipping, and system audio loopback",
        "End-to-end AES-256 encrypted peer pairing without relay servers"
      ],
      description: "Phoenix Screen Share delivers instantaneous, high-fidelity desktop broadcasting for developers, remote teams, and educators. Engineered with low-latency WebRTC and hardware encoders, it provides butter-smooth 60 FPS display streaming, crisp font rendering for IDEs, multi-display routing, and secure zero-relay peer-to-peer sharing."
    }
  };

  // 1. Toast Notification Helper
  function showToast(message, iconClass = "bi-check-circle-fill", bgClass = "text-success") {
    const toastHtml = `
      <div class="toast toast-phoenix align-items-center show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex align-items-center p-3">
          <i class="bi ${iconClass} ${bgClass} fs-5 me-3"></i>
          <div class="toast-body p-0 text-white flex-grow-1">
            ${message}
          </div>
          <button type="button" class="btn-close btn-close-white ms-3" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;
    const $toast = $(toastHtml);
    $("#toastContainer").append($toast);
    setTimeout(function () {
      $toast.fadeOut(400, function () {
        $(this).remove();
      });
    }, 3800);
  }

  // 2. Real-time Search & Category Filtering
  let activeCategory = "all";

  function filterSoftwareCards() {
    const searchQuery = $("#softwareSearchInput").val().toLowerCase().trim();
    let visibleCount = 0;

    $(".software-card-item").each(function () {
      const $card = $(this);
      const cardCategory = $card.data("category");
      const cardTitle = $card.find(".app-title").text().toLowerCase();
      const cardDesc = $card.find(".app-desc").text().toLowerCase();
      const cardFeatures = $card.find(".feature-list").text().toLowerCase();

      const matchesCategory = (activeCategory === "all") || (cardCategory === activeCategory);
      const matchesSearch = !searchQuery || 
        cardTitle.includes(searchQuery) || 
        cardDesc.includes(searchQuery) || 
        cardFeatures.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        $card.stop(true, true).fadeIn(250);
        visibleCount++;
      } else {
        $card.stop(true, true).fadeOut(200);
      }
    });

    if (visibleCount === 0) {
      $("#noResultsMessage").fadeIn(200);
    } else {
      $("#noResultsMessage").fadeOut(150);
    }

    $("#resultsCountBadge").text(`${visibleCount} Found`);
  }

  // Search input event
  $("#softwareSearchInput").on("input", function () {
    filterSoftwareCards();
  });

  // Clear search button
  $("#clearSearchBtn").on("click", function () {
    $("#softwareSearchInput").val("").focus();
    filterSoftwareCards();
  });

  // Category Pill Buttons
  $(".category-pill-btn").on("click", function () {
    $(".category-pill-btn").removeClass("active");
    $(this).addClass("active");
    activeCategory = $(this).data("category");
    filterSoftwareCards();
  });

  // 3. Copy Link Action
  $(document).on("click", ".btn-copy-link", function (e) {
    e.preventDefault();
    const linkToCopy = $(this).attr("data-link");
    const appName = $(this).attr("data-app-name") || "Software link";

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(linkToCopy).then(function () {
        showToast(`Google Drive link for <strong>${appName}</strong> copied to clipboard!`, "bi-clipboard-check-fill", "text-warning");
      }).catch(function () {
        fallbackCopyText(linkToCopy, appName);
      });
    } else {
      fallbackCopyText(linkToCopy, appName);
    }
  });

  function fallbackCopyText(text, appName) {
    const $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
    showToast(`Google Drive link for <strong>${appName}</strong> copied!`, "bi-clipboard-check-fill", "text-warning");
  }

  // Copy UPI ID Action
  $(document).on("click", ".btn-copy-upi", function (e) {
    e.preventDefault();
    const upiId = $(this).attr("data-upi") || "8903860041@apl";

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(upiId).then(function () {
        showToast(`UPI ID <strong>${upiId}</strong> copied to clipboard!`, "bi-check-circle-fill", "text-success");
      }).catch(function () {
        fallbackCopyText(upiId, "UPI ID");
      });
    } else {
      fallbackCopyText(upiId, "UPI ID");
    }
  });

  // 4. Details Modal Population
  $(document).on("click", ".btn-view-details", function () {
    const appId = $(this).data("app-id");
    const item = phoenixSoftwareData[appId];

    if (!item) return;

    $("#modalAppTitle").text(item.name);
    $("#modalAppTagline").text(item.tagline);
    $("#modalAppCategory").text(item.category).attr("class", `badge ${item.badgeClass}`);
    $("#modalAppVersion").text(item.version);
    $("#modalAppSize").text(item.size);
    $("#modalAppArch").text(item.architecture);
    $("#modalAppDesc").text(item.description);

    // Build features list
    const $list = $("#modalAppFeatures");
    $list.empty();
    item.highlights.forEach(function (h) {
      $list.append(`<li><i class="bi bi-check2-circle text-phoenix me-2"></i>${h}</li>`);
    });

    // Update Modal Buttons
    $("#modalDownloadBtn").attr("href", item.driveUrl);
    $("#modalCopyBtn").attr("data-link", item.driveUrl).attr("data-app-name", item.name);

    // Show modal
    const modalEl = document.getElementById("softwareDetailsModal");
    const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
    modalInstance.show();
  });

  // 5. Interactive Phoenix Terminal Simulator
  const $terminalBody = $("#terminalOutput");
  const $terminalInput = $("#terminalInput");

  function appendTerminalLine(content, type = "normal") {
    let html = "";
    if (type === "command") {
      html = `<div><span class="terminal-prompt-user">user@phoenix</span>:<span class="terminal-prompt-host">~</span>$ <span class="text-white">${content}</span></div>`;
    } else if (type === "output") {
      html = `<div class="text-secondary-custom ms-2">${content}</div>`;
    } else if (type === "error") {
      html = `<div class="text-danger ms-2"><i class="bi bi-exclamation-triangle me-1"></i>${content}</div>`;
    } else if (type === "success") {
      html = `<div class="text-success ms-2"><i class="bi bi-check-circle me-1"></i>${content}</div>`;
    }
    $terminalBody.append(html);
    $terminalBody.scrollTop($terminalBody[0].scrollHeight);
  }

  function handleTerminalCommand(cmd) {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    appendTerminalLine(trimmed, "command");

    const parts = trimmed.split(" ");
    const command = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ").toLowerCase();

    switch (command) {
      case "help":
        appendTerminalLine(`Available commands:
  • <span class="text-warning">list</span> - List all Phoenix software packages
  • <span class="text-warning">info &lt;name&gt;</span> - Show detailed information on an app
  • <span class="text-warning">download &lt;name&gt;</span> - Open Google Drive download folder
  • <span class="text-warning">os</span> - View Phoenix OS specs
  • <span class="text-warning">donate</span> / <span class="text-warning">upi</span> - Sponsor via UPI (8903860041@apl) or GitHub
  • <span class="text-warning">about</span> - About the Phoenix Ecosystem
  • <span class="text-warning">clear</span> - Clear terminal output`, "output");
        break;

      case "list":
        appendTerminalLine(`Phoenix Software Package Registry:
  1. <strong class="text-info">phoenix-os</strong> [OS / Kernel] - v3.2.0
  2. <strong class="text-info">phoenix-terminal</strong> [CLI / Emulator] - v2.8.4
  3. <strong class="text-info">phoenix-factory</strong> [DevOps / Build] - v1.9.1
  4. <strong class="text-info">phoenix-recorder</strong> [Media / 4K Capture] - v4.1.0
  5. <strong class="text-info">phoenix-torrent</strong> [P2P / Client] - v2.3.0
  6. <strong class="text-info">phoenix-api-tester</strong> [API / Network] - v3.0.2
  7. <strong class="text-info">phoenix-screen-share</strong> [Media / Streaming] - v2.1.0
  Type <span class="text-warning">download &lt;name&gt;</span> to retrieve links.`, "output");
        break;

      case "info":
        if (!arg) {
          appendTerminalLine("Usage: info &lt;package-name&gt; (e.g., info terminal)", "error");
        } else {
          let foundKey = Object.keys(phoenixSoftwareData).find(k => k.includes(arg) || phoenixSoftwareData[k].name.toLowerCase().includes(arg));
          if (foundKey) {
            const item = phoenixSoftwareData[foundKey];
            appendTerminalLine(`<strong>${item.name}</strong> (${item.version})
  Category: ${item.category}
  Specs: ${item.architecture} | ${item.size}
  Summary: ${item.tagline}`, "output");
          } else {
            appendTerminalLine(`Package '${arg}' not found. Run 'list' to see valid names.`, "error");
          }
        }
        break;

      case "download":
        if (!arg) {
          appendTerminalLine("Usage: download &lt;package-name&gt; (e.g., download os)", "error");
        } else {
          let foundKey = Object.keys(phoenixSoftwareData).find(k => k.includes(arg) || phoenixSoftwareData[k].name.toLowerCase().includes(arg));
          if (foundKey) {
            const item = phoenixSoftwareData[foundKey];
            appendTerminalLine(`Opening Google Drive repository for ${item.name}...`, "success");
            window.open(item.driveUrl, "_blank");
          } else {
            appendTerminalLine(`Package '${arg}' not recognized. Try 'download os', 'download terminal', etc.`, "error");
          }
        }
        break;

      case "os":
        appendTerminalLine(`Phoenix OS v3.2.0:
  • Kernel: Real-time custom Linux 6.x
  • Target: x86_64, ARM64 architecture
  • Security: Zero telemetry, sandboxed user namespaces
  • Link: https://drive.google.com/drive/folders/1waesyn9nZS0AyFMPHzUCFb3qRBaso_v_?usp=sharing`, "output");
        break;

      case "donate":
      case "sponsor":
      case "upi":
        appendTerminalLine(`❤️ Thank you for supporting the Phoenix project!
  • Direct UPI ID: <strong class="text-success">8903860041@apl</strong> (GPay, PhonePe, Paytm, BHIM)
  • GitHub Sponsors: <span class="text-warning">https://github.com/sponsors/satheshsat</span>
  Opening donation channels...`, "success");
        window.open("https://github.com/sponsors/satheshsat", "_blank");
        break;

      case "about":
        appendTerminalLine(`Phoenix Ecosystem: A curated suite of high-performance developer tools, operating systems, and media utilities engineered for speed, privacy, and productivity. Hosted at satphoenix.github.io.`, "output");
        break;

      case "clear":
        $terminalBody.empty();
        break;

      default:
        appendTerminalLine(`Unknown command: '${command}'. Type <span class="text-warning">help</span> for assistance.`, "error");
        break;
    }
  }

  $terminalInput.on("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = $(this).val();
      $(this).val("");
      handleTerminalCommand(val);
    }
  });

  // Clicking on terminal focuses input
  $(".terminal-window").on("click", function () {
    $terminalInput.focus();
  });

  // 6. Navbar Scroll Effect & Active Link Spy
  $(window).on("scroll", function () {
    const scrollPos = $(this).scrollTop();
    if (scrollPos > 40) {
      $(".navbar-phoenix").addClass("scrolled");
    } else {
      $(".navbar-phoenix").removeClass("scrolled");
    }

    // Back to top visibility
    if (scrollPos > 450) {
      $("#backToTopBtn").addClass("show");
    } else {
      $("#backToTopBtn").removeClass("show");
    }
  });

  // Back to top button action
  $("#backToTopBtn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  // Smooth Scrolling for anchor links
  $('a[href^="#"]').on("click", function (e) {
    const target = $(this.getAttribute("href"));
    if (target.length) {
      e.preventDefault();
      $("html, body").stop().animate({
        scrollTop: target.offset().top - 80
      }, 350);

      // Close mobile navbar if open
      const $navbarCollapse = $(".navbar-collapse");
      if ($navbarCollapse.hasClass("show")) {
        $navbarCollapse.collapse("hide");
      }
    }
  });

  // 7. Hero Download click feedback
  $(document).on("click", ".btn-gdrive", function () {
    const appTitle = $(this).closest(".software-card").find(".app-title").text() || "Phoenix Software";
    showToast(`Redirecting to Google Drive for <strong>${appTitle}</strong>...`, "bi-google", "text-info");
  });

  // Initial console greeting
  console.log("%c🔥 Phoenix Software Ecosystem Initialized 🔥", "color: #ff6600; font-size: 16px; font-weight: bold;");
});

