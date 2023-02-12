import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildloaders({ isDev }: BuildOptions):webpack.RuleSetRule[]{

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const tsloader =  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssloader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
            ? "[path][name]__[local]--[hash:base64:5]"
            :"[hash:base64:8]"
          },
        }
      },
      "sass-loader",
    ],
  };

    return  [
      tsloader,
      cssloader,
      svgLoader,
      fileLoader
      ]
}